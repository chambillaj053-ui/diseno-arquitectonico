'use client'

import { useState } from "react"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Separator } from "@/components/ui/separator"
import {
  Compass,
  Ruler,
  Home,
  Building2,
  Building,
  LandPlot,
  GraduationCap,
  Palette,
  Eye,
  Pencil,
  Box,
  Monitor,
  Users,
  BookOpen,
  Award,
  ArrowRight,
  ChevronRight,
  Lightbulb,
  Target,
  LayoutGrid,
} from "lucide-react"

// ========================
// DATA & TYPES
// ========================

interface StudentProject {
  id: string
  title: string
  student: string
  description: string
  image: string
  category: string
  tags: string[]
}

interface GradeData {
  id: string
  label: string
  shortLabel: string
  icon: React.ReactNode
  color: string
  bgGradient: string
  description: string
  objectives: string[]
  skills: string[]
  projects: StudentProject[]
}

const gradesData: GradeData[] = [
  {
    id: "grado1",
    label: "1° Grado",
    shortLabel: "1°",
    icon: <Pencil className="size-4" />,
    color: "text-amber-700",
    bgGradient: "from-amber-50 to-orange-50",
    description:
      "En el primer grado, los estudiantes dan sus primeros pasos en el mundo del diseño arquitectónico. Aprenden los fundamentos del dibujo técnico, la geometría descriptiva y las normas básicas de representación gráfica. Los proyectos se enfocan en desarrollar la habilidad de observación, la precisión en el trazo y la comprensión de las proporciones, sentando las bases para la formación profesional futura.",
    objectives: [
      "Dominar las herramientas básicas del dibujo técnico",
      "Comprender las normas de representación gráfica",
      "Desarrollar la percepción espacial y proporcional",
    ],
    skills: ["Dibujo a mano alzada", "Uso de escuadra y cartabón", "Geometría descriptiva", "Croquis arquitectónico"],
    projects: [
      {
        id: "1-1",
        title: "Croquis de Observación Urbana",
        student: "Ana Martínez López",
        description:
          "Serie de croquis realizados en salidas de campo donde se capturan fachadas y elementos urbanos del entorno escolar. La estudiante demuestra un manejo fluido del trazo y buena comprensión de las proporciones en la representación de volúmenes simples.",
        image: "/project-1.png",
        category: "Dibujo a mano alzada",
        tags: ["Croquis", "Urbano", "Observación"],
      },
      {
        id: "1-2",
        title: "Geometría Descriptiva Aplicada",
        student: "Carlos Rivera Mendoza",
        description:
          "Ejercicios de proyecciones diédricas y axonométricas aplicados a formas arquitectónicas básicas. El trabajo muestra dominio de las técnicas de representación espacial y comprensión clara de los sistemas de proyección.",
        image: "/project-6.png",
        category: "Geometría descriptiva",
        tags: ["Proyecciones", "Axonometría", "Técnico"],
      },
      {
        id: "1-3",
        title: "Planta Básica de Vivienda",
        student: "Lucía Fernández Torres",
        description:
          "Primera aproximación al diseño de una planta arquitectónica de una vivienda unifamiliar sencilla. La estudiante aplica correctamente las normas de representación y demuestra comprensión de las relaciones espaciales básicas.",
        image: "/project-2.png",
        category: "Dibujo técnico",
        tags: ["Planta", "Vivienda", "Normas"],
      },
    ],
  },
  {
    id: "grado2",
    label: "2° Grado",
    shortLabel: "2°",
    icon: <Ruler className="size-4" />,
    color: "text-emerald-700",
    bgGradient: "from-emerald-50 to-teal-50",
    description:
      "En el segundo grado, los estudiantes profundizan en la elaboración de planos arquitectónicos completos. Aprenden a representar plantas, cortes, elevaciones y detalles constructivos con rigor técnico. Se introduce el uso de escalas normalizadas y la simbología arquitectónica convencional, permitiendo una comunicación gráfica más profesional y precisa.",
    objectives: [
      "Elaborar planos arquitectónicos completos y normalizados",
      "Manejar escalas y cotas con precisión",
      "Dominar la simbología arquitectónica convencional",
    ],
    skills: ["Planos de planta", "Cortes y secciones", "Elevaciones o fachadas", "Simbología y acotación"],
    projects: [
      {
        id: "2-1",
        title: "Plano Completo de Vivienda Unifamiliar",
        student: "Miguel Ángel Rojas",
        description:
          "Conjunto de planos que incluye planta arquitectónica, corte longitudinal, corte transversal y fachada principal de una vivienda de un nivel. El trabajo demuestra dominio en el uso de escalas, acotación y simbología convencional.",
        image: "/project-2.png",
        category: "Planos arquitectónicos",
        tags: ["Planta", "Cortes", "Fachada"],
      },
      {
        id: "2-2",
        title: "Sección Constructiva de Muro",
        student: "Valentina Cruz Espinoza",
        description:
          "Dibujo detallado de la sección constructiva de un muro de ladrillo con sus componentes: cimentación, muro, aislamiento y acabados. La estudiante muestra comprensión de los sistemas constructivos básicos y su representación gráfica.",
        image: "/project-7.png",
        category: "Detalles constructivos",
        tags: ["Sección", "Constructivo", "Detalle"],
      },
      {
        id: "2-3",
        title: "Elevaciones de Edificio Residencial",
        student: "Diego Hurtado Vargas",
        description:
          "Conjunto de las cuatro elevaciones de un edificio residencial de tres niveles. El estudiante aplica correctamente las técnicas de representación de fachadas, incluyendo tratamiento de sombras y texturas.",
        image: "/project-6.png",
        category: "Elevaciones",
        tags: ["Elevaciones", "Residencial", "Sombras"],
      },
    ],
  },
  {
    id: "grado3",
    label: "3° Grado",
    shortLabel: "3°",
    icon: <Box className="size-4" />,
    color: "text-rose-700",
    bgGradient: "from-rose-50 to-pink-50",
    description:
      "El tercer grado marca la transición hacia la representación tridimensional y la materialización de ideas. Los estudiantes aprenden a construir maquetas físicas que traducen sus planos en objetos tangibles, y se introducen en los fundamentos de la renderización digital. Esta etapa es fundamental para desarrollar la capacidad de visualización espacial y la comunicación efectiva del proyecto arquitectónico.",
    objectives: [
      "Construir maquetas arquitectónicas a escala",
      "Comprender los fundamentos de la representación 3D digital",
      "Integrar la representación bidimensional y tridimensional",
    ],
    skills: ["Construcción de maquetas", "Perspectiva y renders", "Materiales y texturas", "Presentación de proyectos"],
    projects: [
      {
        id: "3-1",
        title: "Maqueta de Casa de Campo",
        student: "Sofía Delgado Prado",
        description:
          "Maqueta tridimensional construida en cartón foam y madera balsa que representa una casa de campo de un nivel con su entorno paisajístico. La estudiante demuestra destreza en el corte preciso, ensamblaje y acabado de materiales, así como integración del contexto natural.",
        image: "/project-3.png",
        category: "Maquetas",
        tags: ["Maqueta", "Vivienda", "Paisajismo"],
      },
      {
        id: "3-2",
        title: "Render de Interior Residencial",
        student: "Andrés Mendoza Quispe",
        description:
          "Visualización digital del interior de una sala de estar que muestra el manejo de iluminación, texturas y mobiliario. El estudiante demuestra comprensión de los principios de composición visual y representación fotorrealista.",
        image: "/project-4.png",
        category: "Renders 3D",
        tags: ["Render", "Interior", "Fotorrealista"],
      },
      {
        id: "3-3",
        title: "Maqueta de Conjunto Habitacional",
        student: "Isabella Torres Ramos",
        description:
          "Maqueta conceptual de un conjunto de tres viviendas con áreas comunes y zonas verdes. El trabajo muestra capacidad de planificación a escala urbana y dominio de técnicas avanzadas de modelado físico.",
        image: "/project-8.png",
        category: "Maquetas",
        tags: ["Conjunto", "Habitacional", "Urbano"],
      },
    ],
  },
  {
    id: "grado4",
    label: "4° Grado",
    shortLabel: "4°",
    icon: <Home className="size-4" />,
    color: "text-violet-700",
    bgGradient: "from-violet-50 to-purple-50",
    description:
      "En el cuarto grado, los estudiantes abordan el diseño de espacios habitacionales con un enfoque integral. Se estudian las teorías de la composición arquitectónica, la ergonomía, la sustentabilidad y la normativa urbana. Los proyectos requieren una propuesta completa que incluya investigación, conceptos de diseño, desarrollo gráfico y maqueta, simulando el proceso profesional real.",
    objectives: [
      "Diseñar espacios habitacionales integrales",
      "Aplicar criterios de sustentabilidad y ergonomía",
      "Desarrollar proyectos con proceso metodológico completo",
    ],
    skills: ["Diseño habitacional", "Composición arquitectónica", "Sustentabilidad", "Normativa urbana"],
    projects: [
      {
        id: "4-1",
        title: "Proyecto de Vivienda Sostenible",
        student: "Mariana Castillo Flores",
        description:
          "Propuesta de vivienda unifamiliar que integra estrategias bioclimáticas: orientación solar pasiva, ventilación cruzada, recolección de agua de lluvia y materiales ecológicos. El proyecto incluye planos completos, memoria descriptiva y maqueta.",
        image: "/project-4.png",
        category: "Diseño habitacional",
        tags: ["Sostenible", "Bioclimático", "Integral"],
      },
      {
        id: "4-2",
        title: "Rediseño de Espacio Público",
        student: "Juan Pablo Guerrero",
        description:
          "Propuesta de rediseño de una plaza del barrio que busca revitalizar el espacio público mediante la incorporación de zonas verdes, mobiliario urbano y circulaciones accesibles. Incluye análisis del sitio, propuesta conceptual y planos de ejecución.",
        image: "/project-9.png",
        category: "Espacio público",
        tags: ["Plaza", "Público", "Rediseño"],
      },
      {
        id: "4-3",
        title: "Departamento en Conjunto Residencial",
        student: "Camila Vargas Ríos",
        description:
          "Diseño de un departamento tipo dentro de un conjunto residencial, considerando distribución funcional, iluminación natural y espacios flexibles. El proyecto aborda la problemática de la vivienda densa con soluciones creativas y eficientes.",
        image: "/project-7.png",
        category: "Diseño habitacional",
        tags: ["Departamento", "Residencial", "Funcional"],
      },
    ],
  },
  {
    id: "grado5",
    label: "5° Grado",
    shortLabel: "5°",
    icon: <LandPlot className="size-4" />,
    color: "text-sky-700",
    bgGradient: "from-sky-50 to-cyan-50",
    description:
      "El quinto grado es el nivel de mayor profundidad y complejidad, donde los estudiantes desarrollan proyectos de grado que integran todos los conocimientos adquiridos. Se abordan temáticas de urbanismo, diseño de equipamientos colectivos y planificación territorial. Los proyectos de grado son evaluados por un jurado y representan la culminación de la formación en diseño arquitectónico a nivel secundario.",
    objectives: [
      "Desarrollar un proyecto de grado integral y de complejidad media",
      "Integrar criterios urbanos, funcionales y estéticos",
      "Presentar proyectos con nivel profesional",
    ],
    skills: ["Urbanismo básico", "Equipamientos colectivos", "Planificación territorial", "Presentación profesional"],
    projects: [
      {
        id: "5-1",
        title: "Centro Comunitario de Barrio",
        student: "Gabriela Rojas Salazar",
        description:
          "Proyecto de grado: diseño de un centro comunitario que alberga salón multiusos, biblioteca, aulas taller y áreas verdes. La propuesta integra criterios de accesibilidad universal, sustentabilidad y resolución urbana del entorno inmediato.",
        image: "/project-5.png",
        category: "Proyecto de grado",
        tags: ["Comunitario", "Equipamiento", "Grado"],
      },
      {
        id: "5-2",
        title: "Plan de Renovación Urbana",
        student: "Sebastián Quispe Huamán",
        description:
          "Propuesta de renovación urbana para un sector del centro histórico que incluye remodelación de fachadas, peatonalización de calles, creación de corredores verdes y regulación de usos de suelo. El trabajo demuestra visión urbanística integral.",
        image: "/project-9.png",
        category: "Urbanismo",
        tags: ["Renovación", "Urbano", "Histórico"],
      },
      {
        id: "5-3",
        title: "Complejo Educativo Sustentable",
        student: "Alejandra Mendoza Vega",
        description:
          "Diseño de un complejo educativo que comprende aulas, laboratorios, biblioteca, auditorio y áreas deportivas. El proyecto aplica estrategias de diseño bioclimático, energía renovable y paisajismo productivo, mostrando una propuesta arquitectónica completa y madura.",
        image: "/project-8.png",
        category: "Proyecto de grado",
        tags: ["Educativo", "Sustentable", "Complejo"],
      },
    ],
  },
]

// ========================
// COMPONENTS
// ========================

function ProjectCard({ project, gradeColor }: { project: StudentProject; gradeColor: string }) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Card
        className="group cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-border/60"
        onClick={() => setOpen(true)}
      >
        <div className="relative overflow-hidden aspect-[4/3]">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="inline-flex items-center gap-1 text-white text-sm font-medium">
              <Eye className="size-4" /> Ver detalle
            </span>
          </div>
        </div>
        <CardHeader className="pb-2">
          <div className="flex items-start justify-between gap-2">
            <CardTitle className="text-base leading-snug line-clamp-2">{project.title}</CardTitle>
          </div>
          <CardDescription className="text-sm flex items-center gap-1.5">
            <GraduationCap className="size-3.5 shrink-0" />
            <span className="truncate">{project.student}</span>
          </CardDescription>
        </CardHeader>
        <CardContent className="pb-2">
          <Badge variant="outline" className={`text-xs ${gradeColor} border-current/30`}>
            {project.category}
          </Badge>
        </CardContent>
        <CardFooter className="pt-0">
          <div className="flex flex-wrap gap-1">
            {project.tags.map((tag) => (
              <span key={tag} className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded-md">
                {tag}
              </span>
            ))}
          </div>
        </CardFooter>
      </Card>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-xl">{project.title}</DialogTitle>
            <DialogDescription className="flex items-center gap-1.5">
              <GraduationCap className="size-4" />
              {project.student}
            </DialogDescription>
          </DialogHeader>
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 600px"
            />
          </div>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-sm mb-1">Descripción del proyecto</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
            </div>
            <Separator />
            <div className="flex items-center gap-3 flex-wrap">
              <Badge className="text-xs">{project.category}</Badge>
              {project.tags.map((tag) => (
                <span key={tag} className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded-md">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}

function CoverSection() {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="relative rounded-2xl overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/hero-arch.png"
            alt="Diseño Arquitectónico"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />
        </div>
        <div className="relative z-10 px-6 py-16 sm:px-12 sm:py-24 md:px-16 md:py-28">
          <div className="max-w-2xl space-y-6">
            <div className="flex items-center gap-2 text-amber-400">
              <Compass className="size-5" />
              <span className="text-sm font-semibold uppercase tracking-widest">Especialidad</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
              Diseño
              <br />
              Arquitectónico
            </h1>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-lg">
              Galería virtual de trabajos estudiantiles. Descubre el talento creativo y técnico de nuestros estudiantes
              a lo largo de los cinco grados de la especialidad.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Badge className="bg-amber-500/20 text-amber-300 border-amber-500/30 hover:bg-amber-500/30">
                <BookOpen className="size-3 mr-1" /> 5 Grados
              </Badge>
              <Badge className="bg-amber-500/20 text-amber-300 border-amber-500/30 hover:bg-amber-500/30">
                <Palette className="size-3 mr-1" /> Proyectos Creativos
              </Badge>
              <Badge className="bg-amber-500/20 text-amber-300 border-amber-500/30 hover:bg-amber-500/30">
                <Users className="size-3 mr-1" /> Trabajo Estudiantil
              </Badge>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="border-amber-200/50 bg-gradient-to-br from-amber-50/50 to-orange-50/50">
          <CardHeader>
            <div className="flex items-center gap-2 text-amber-700">
              <Target className="size-5" />
              <CardTitle className="text-amber-900">Nuestra Misión</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-amber-800/80 leading-relaxed">
              Formar profesionales técnicos con capacidad para diseñar, representar y comunicar proyectos
              arquitectónicos, integrando conocimientos teóricos y prácticos que respondan a las necesidades
              del entorno construido y la comunidad. Nuestros estudiantes desarrollan competencias en dibujo técnico,
              modelado tridimensional, diseño espacial y pensamiento crítico aplicado a la arquitectura.
            </p>
          </CardContent>
        </Card>

        <Card className="border-amber-200/50 bg-gradient-to-br from-amber-50/50 to-orange-50/50">
          <CardHeader>
            <div className="flex items-center gap-2 text-amber-700">
              <Lightbulb className="size-5" />
              <CardTitle className="text-amber-900">Nuestra Visión</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-amber-800/80 leading-relaxed">
              Ser referentes en la formación de diseñadores arquitectónicos a nivel secundario, reconocidos por la
              calidad y creatividad de los proyectos estudiantiles, y por la contribución activa al desarrollo
              urbano sostenible de nuestra comunidad. Aspiramos a que cada estudiante sea un agente de cambio
              en la transformación positiva de los espacios habitables.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Grade Overview */}
      <div className="space-y-4">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold text-foreground">Recorrido Formativo</h2>
          <p className="text-muted-foreground text-sm max-w-xl mx-auto">
            Conoce la progresión de aprendizajes y proyectos a lo largo de los cinco grados de la especialidad
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {gradesData.map((grade, index) => (
            <Card
              key={grade.id}
              className={`group cursor-pointer transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 bg-gradient-to-br ${grade.bgGradient} border-0`}
            >
              <CardContent className="p-4 text-center space-y-3">
                <div className="flex items-center justify-center">
                  <div className={`flex items-center justify-center size-12 rounded-full bg-white/80 shadow-sm ${grade.color}`}>
                    {grade.icon}
                  </div>
                </div>
                <div>
                  <div className="text-xs text-muted-foreground font-medium mb-0.5">Grado {index + 1}</div>
                  <div className={`font-bold text-sm ${grade.color}`}>{grade.shortLabel} Secundaria</div>
                </div>
                <div className="flex items-center justify-center gap-1 text-xs text-muted-foreground group-hover:gap-2 transition-all">
                  <span>Explorar</span>
                  <ArrowRight className="size-3" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Skills Overview */}
      <Card className="bg-gradient-to-r from-stone-50 to-amber-50/30 border-stone-200/60">
        <CardHeader>
          <div className="flex items-center gap-2">
            <LayoutGrid className="size-5 text-stone-600" />
            <CardTitle className="text-stone-800">Competencias que Desarrollamos</CardTitle>
          </div>
          <CardDescription>
            Al finalizar la especialidad, nuestros estudiantes dominan un conjunto integral de competencias
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {[
              { icon: <Pencil className="size-4" />, label: "Dibujo Técnico" },
              { icon: <Ruler className="size-4" />, label: "Representación Gráfica" },
              { icon: <Box className="size-4" />, label: "Modelado 3D" },
              { icon: <Home className="size-4" />, label: "Diseño Espacial" },
              { icon: <Building2 className="size-4" />, label: "Composición Arquitectónica" },
              { icon: <LandPlot className="size-4" />, label: "Urbanismo" },
              { icon: <Palette className="size-4" />, label: "Presentación de Proyectos" },
              { icon: <Award className="size-4" />, label: "Proyecto de Grado" },
            ].map((skill) => (
              <div
                key={skill.label}
                className="flex items-center gap-2 p-3 rounded-lg bg-white/70 border border-stone-200/50 text-sm"
              >
                <span className="text-amber-700">{skill.icon}</span>
                <span className="text-stone-700 font-medium">{skill.label}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function GradeSection({ grade }: { grade: GradeData }) {
  return (
    <div className="space-y-8">
      {/* Grade Header */}
      <div className={`rounded-2xl bg-gradient-to-r ${grade.bgGradient} p-6 sm:p-8`}>
        <div className="flex flex-col sm:flex-row items-start gap-4">
          <div className={`flex items-center justify-center size-14 rounded-xl bg-white/80 shadow-sm ${grade.color}`}>
            {grade.icon}
          </div>
          <div className="flex-1 space-y-2">
            <h2 className={`text-2xl font-bold ${grade.color}`}>{grade.label}</h2>
            <p className="text-sm text-foreground/70 leading-relaxed">{grade.description}</p>
          </div>
        </div>
      </div>

      {/* Objectives & Skills */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Target className={`size-5 ${grade.color}`} />
              <CardTitle className="text-base">Objetivos del Grado</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {grade.objectives.map((obj, i) => (
                <li key={i} className="flex items-start gap-2 text-sm">
                  <ChevronRight className={`size-4 shrink-0 mt-0.5 ${grade.color}`} />
                  <span className="text-muted-foreground">{obj}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Lightbulb className={`size-5 ${grade.color}`} />
              <CardTitle className="text-base">Competencias que Desarrolla</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {grade.skills.map((skill) => (
                <Badge key={skill} variant="outline" className={`${grade.color} border-current/30`}>
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Projects Gallery */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Monitor className={`size-5 ${grade.color}`} />
          <h3 className="text-lg font-semibold">Proyectos Destacados</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {grade.projects.map((project) => (
            <ProjectCard key={project.id} project={project} gradeColor={grade.color} />
          ))}
        </div>
      </div>
    </div>
  )
}

// ========================
// MAIN PAGE
// ========================

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Top Header Bar */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            <div className="flex items-center gap-2.5">
              <div className="flex items-center justify-center size-8 rounded-lg bg-amber-100">
                <Compass className="size-4.5 text-amber-700" />
              </div>
              <div>
                <h1 className="text-sm font-bold leading-tight">Diseño Arquitectónico</h1>
                <p className="text-[11px] text-muted-foreground leading-tight">Galería Estudiantil</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="text-xs hidden sm:flex">
                <GraduationCap className="size-3 mr-1" />
                Nivel Secundario
              </Badge>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Tabs defaultValue="caratula" className="space-y-6">
            <TabsList className="w-full flex h-auto flex-wrap justify-start gap-1 bg-muted/50 p-1.5 rounded-xl">
              <TabsTrigger
                value="caratula"
                className="flex items-center gap-1.5 px-4 py-2 text-sm data-[state=active]:bg-amber-100 data-[state=active]:text-amber-800 data-[state=active]:shadow-sm rounded-lg"
              >
                <Compass className="size-4" />
                <span className="hidden sm:inline">Carátula</span>
                <span className="sm:hidden">Inicio</span>
              </TabsTrigger>
              {gradesData.map((grade) => (
                <TabsTrigger
                  key={grade.id}
                  value={grade.id}
                  className={`flex items-center gap-1.5 px-4 py-2 text-sm rounded-lg data-[state=active]:shadow-sm ${
                    grade.id === "grado1"
                      ? "data-[state=active]:bg-amber-100 data-[state=active]:text-amber-800"
                      : grade.id === "grado2"
                      ? "data-[state=active]:bg-emerald-100 data-[state=active]:text-emerald-800"
                      : grade.id === "grado3"
                      ? "data-[state=active]:bg-rose-100 data-[state=active]:text-rose-800"
                      : grade.id === "grado4"
                      ? "data-[state=active]:bg-violet-100 data-[state=active]:text-violet-800"
                      : "data-[state=active]:bg-sky-100 data-[state=active]:text-sky-800"
                  }`}
                >
                  {grade.icon}
                  <span className="hidden sm:inline">{grade.label}</span>
                  <span className="sm:hidden">{grade.shortLabel}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value="caratula">
              <CoverSection />
            </TabsContent>

            {gradesData.map((grade) => (
              <TabsContent key={grade.id} value={grade.id}>
                <GradeSection grade={grade} />
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/50 bg-muted/30 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center size-7 rounded-md bg-amber-100">
                <Compass className="size-3.5 text-amber-700" />
              </div>
              <div>
                <p className="text-sm font-semibold">Diseño Arquitectónico</p>
                <p className="text-xs text-muted-foreground">Galería de Trabajos Estudiantiles</p>
              </div>
            </div>
            <p className="text-xs text-muted-foreground text-center sm:text-right">
              Especialidad de Diseño Arquitectónico — Nivel Secundario
              <br />
              Todos los proyectos son trabajo original de los estudiantes
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
