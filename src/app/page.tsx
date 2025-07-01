"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Shield,
  Wrench,
  Home,
  Building2,
  Sparkles,
  CheckCircle,
  Star,
  Menu,
  X,
  RailSymbol,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí se manejaría el envío del formulario
    console.log("Formulario enviado:", formData)
    alert("¡Gracias por contactarnos! Te responderemos pronto.")
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    })
  }

  const services = [
    {
      icon: <Home className="h-8 w-8" />,
      title: "Ventanas y puertas",
      description: "Fabricación e instalación de ventanas y puertas de aluminio con cristal templado y laminado.",
      features: ["Aluminio de alta calidad", "Cristal templado", "Instalación profesional", "Garantía extendida"],
    },
    {
      icon: <Building2 className="h-8 w-8" />,
      title: "Fachadas comerciales",
      description: "Diseño y construcción de fachadas de cristal para edificios comerciales y corporativos.",
      features: ["Diseño personalizado", "Cristal de seguridad", "Estructura resistente", "Acabados premium"],
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Cristal de seguridad",
      description: "Instalación de cristales templados, laminados y blindados para máxima seguridad.",
      features: ["Cristal blindado", "Resistente a impactos", "Protección UV", "Aislamiento térmico"],
    },
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: "Espejos decorativos",
      description: "Fabricación de espejos personalizados para baños, salas y espacios comerciales.",
      features: ["Cortes personalizados", "Marcos decorativos", "Instalación incluida", "Diseños únicos"],
    },
    {
      icon: <RailSymbol className="h-8 w-8" />,
      title: "Barandales y domos",
      description: "Diseño e instalación de barandales de cristal y domos de policarbonato para interiores y exteriores.",
      features: ["Barandales modernos", "Domos resistentes a rayos UV", "Montaje estructural", "Diseños a medida"],
    },
    {
      icon: <Wrench className="h-8 w-8" />,
      title: "Mantenimiento",
      description: "Servicio de mantenimiento y reparación de estructuras de aluminio y cristal.",
      features: ["Reparaciones rápidas", "Mantenimiento preventivo", "Repuestos originales", "Servicio 24/7"],
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="bg-orange-500 p-2 rounded-lg">
                <Building2 className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Cristalería y Aluminios</h1>
                <p className="text-sm text-orange-500 font-semibold">CyD</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <Link href="#inicio" className="text-gray-700 hover:text-orange-500 font-medium">
                Inicio
              </Link>
              <Link href="#nosotros" className="text-gray-700 hover:text-orange-500 font-medium">
                Nosotros
              </Link>
              <Link href="#servicios" className="text-gray-700 hover:text-orange-500 font-medium">
                Servicios
              </Link>
              <Link href="#horarios" className="text-gray-700 hover:text-orange-500 font-medium">
                Horarios
              </Link>
              <Link href="#contacto" className="text-gray-700 hover:text-orange-500 font-medium">
                Contacto
              </Link>
            </nav>

            {/* Mobile menu button */}
            <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t flex justify-center">
              <nav className="flex flex-col items-center space-y-4">
                <Link href="#inicio" className="text-gray-700 hover:text-orange-500 font-medium">
                  Inicio
                </Link>
                <Link href="#nosotros" className="text-gray-700 hover:text-orange-500 font-medium">
                  Nosotros
                </Link>
                <Link href="#servicios" className="text-gray-700 hover:text-orange-500 font-medium">
                  Servicios
                </Link>
                <Link href="#horarios" className="text-gray-700 hover:text-orange-500 font-medium">
                  Horarios
                </Link>
                <Link href="#contacto" className="text-gray-700 hover:text-orange-500 font-medium">
                  Contacto
                </Link>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="bg-gradient-to-br from-orange-50 to-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex justify-center lg:justify-start">
                <Badge className="mb-4 bg-orange-100 text-orange-800 hover:bg-orange-400">
                  +15 años de experiencia
                </Badge>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 text-center lg:text-left">
                Cristalería y Aluminios
                <br className="block hidden" />
                <span className="text-orange-500"> Calidad superior</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 text-center lg:text-left">
                Especialistas en fabricación e instalación de ventanas, puertas, fachadas y estructuras de aluminio con
                cristal templado. Calidad garantizada y servicio profesional.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-orange-500 hover:bg-blue-700">
                  <Phone className="mr-2 h-5 w-5" />
                  Solicitar cotización
                </Button>
                <Button size="lg" variant="outline">
                  Ver servicios
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/aluminios.jpg?"
                alt="Cristalería y Aluminios CyD - Ventanas y puertas de aluminio"
                width={600}
                height={500}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 p-2 rounded-full">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">100% Garantizado</p>
                    <p className="text-sm text-gray-600">Calidad certificada</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quiénes Somos */}
      <section id="nosotros" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Quiénes somos</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Somos una empresa familiar con más de 15 años de experiencia en el sector de cristalería y aluminios
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/cristaleria.jpg?height=400&width=500"
                alt="Equipo de Cristalería y Aluminios CyD"
                width={500}
                height={400}
                className="rounded-xl shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center lg:text-left">Nuestra historia</h3>
                <p className="text-gray-600 mb-4">
                  Cristalería y Aluminios CyD nació en 2008 con la visión de ofrecer soluciones integrales en
                  cristalería y estructuras de aluminio. Comenzamos como un pequeño taller familiar y hoy somos
                  reconocidos en la región por nuestra calidad y profesionalismo.
                </p>
                <p className="text-gray-600">
                  Nos especializamos en proyectos residenciales y comerciales, siempre comprometidos con la excelencia
                  en cada trabajo que realizamos.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-orange-50 rounded-lg">
                  <div className="text-3xl font-bold text-orange-500 mb-2">500+</div>
                  <div className="text-sm text-gray-600">Proyectos Completados</div>
                </div>
                <div className="text-center p-4 bg-orange-50 rounded-lg">
                  <div className="text-3xl font-bold text-orange-500 mb-2">15+</div>
                  <div className="text-sm text-gray-600">Años de Experiencia</div>
                </div>
              </div>

              <div className="space-y-3 text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Materiales de primera calidad</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Equipo técnico especializado</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Garantía en todos nuestros trabajos</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Atención personalizada</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section id="servicios" className="bg-gradient-to-br from-orange-50 to-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Nuestros servicios</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ofrecemos una amplia gama de servicios especializados en cristalería y estructuras de aluminio
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="bg-orange-100 w-16 h-16 rounded-lg flex items-center justify-center mb-4 text-orange-500">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Horarios */}
      <section id="horarios" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Horarios de atención</h2>
            <p className="text-xl text-gray-600">Estamos disponibles para atenderte en los siguientes horarios</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="text-center">
              <CardHeader>
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-orange-500" />
                </div>
                <CardTitle>Horario de oficina</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="font-medium">Lunes - Viernes</span>
                    <span className="text-orange-500">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="font-medium">Sábados</span>
                    <span className="text-orange-500">8:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="font-medium">Domingos</span>
                    <span className="text-gray-500">Cerrado</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle>Emergencias</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 mb-4">
                  Para emergencias y servicios urgentes, estamos disponibles las 24 horas.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center justify-center space-x-2">
                    <Phone className="h-4 w-4 text-green-600" />
                    <span className="font-semibold text-green-600">+52 (555) 123-4567</span>
                  </div>
                  <p className="text-sm text-gray-500">Servicio de emergencia 24/7</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Formulario de Contacto */}
      <section id="contacto" className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Contáctanos</h2>
            <p className="text-xl text-gray-600">
              ¿Tienes un proyecto en mente? Nos encantaría ayudarte a hacerlo realidad
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Información de Contacto */}
            <div className="space-y-8 text-center lg:text-left">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Información de Contacto</h3>
                <div className="space-y-4">
                  <div className="flex flex-col items-center lg:flex-row lg:items-start lg:space-x-4">
                    <div className="bg-orange-100 p-3 rounded-lg mb-2 lg:mb-0">
                      <MapPin className="h-6 w-6 text-orange-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Dirección</h4>
                      <p className="text-gray-600">
                        Av. Principal #123, Col. Centro<br />
                        Ciudad, Estado, CP 12345
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col items-center lg:flex-row lg:items-start lg:space-x-4">
                    <div className="bg-orange-100 p-3 rounded-lg mb-2 lg:mb-0">
                      <Phone className="h-6 w-6 text-orange-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Teléfono</h4>
                      <p className="text-gray-600">+52 (555) 123-4567</p>
                      <p className="text-gray-600">+52 (555) 765-4321</p>
                    </div>
                  </div>

                  <div className="flex flex-col items-center lg:flex-row lg:items-start lg:space-x-4">
                    <div className="bg-orange-100 p-3 rounded-lg mb-2 lg:mb-0">
                      <Mail className="h-6 w-6 text-orange-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Email</h4>
                      <p className="text-gray-600">info@cristaleriaCyD.com</p>
                      <p className="text-gray-600">ventas@cristaleriaCyD.com</p>
                    </div>
                  </div>
                </div>
              </div>


              <div className="bg-orange-100 p-6 rounded-xl">
                <h4 className="font-semibold text-gray-900 mb-2">¿Por qué elegirnos?</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center space-x-2">
                    <Star className="h-4 w-4 text-yellow-500" />
                    <span>Más de 15 años de experiencia</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Star className="h-4 w-4 text-yellow-500" />
                    <span>Materiales de primera calidad</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Star className="h-4 w-4 text-yellow-500" />
                    <span>Garantía en todos nuestros trabajos</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Star className="h-4 w-4 text-yellow-500" />
                    <span>Cotizaciones sin costo</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Formulario */}
            <Card className="h-fit self-start">
              <CardHeader>
                <CardTitle>Solicita tu Cotización</CardTitle>
                <CardDescription>Completa el formulario y te contactaremos en menos de 24 horas</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Nombre completo *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Tu nombre completo"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="tu@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Teléfono *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+52 (555) 123-4567"
                      />
                    </div>
                    <div>
                      <Label htmlFor="service">Servicio de interés</Label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="">Selecciona un servicio</option>
                        <option value="ventanas-puertas">Ventanas y puertas</option>
                        <option value="fachadas">Fachadas comerciales</option>
                        <option value="cristal-seguridad">Cristal de seguridad</option>
                        <option value="espejos">Espejos decorativos</option>
                        <option value="barandales">Barandales y domos</option>
                        <option value="mantenimiento">Mantenimiento</option>
                        <option value="otro">Otro</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message">Mensaje *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Describe tu proyecto o necesidades..."
                      rows={4}
                    />
                  </div>

                  <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-700">
                    <Mail className="mr-2 h-4 w-4" />
                    Enviar Solicitud
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center md:text-left">
            <div className="md:col-span-2 space-y-4">
              <div className="flex justify-center md:justify-start items-center space-x-2">
                <div className="bg-orange-500 p-2 rounded-lg">
                  <Building2 className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">Cristalería y Aluminios CyD</h3>
              </div>
              <p className="text-gray-400 max-w-md mx-auto md:mx-0">
                Especialistas en cristalería y estructuras de aluminio con más de 15 años de experiencia. Calidad garantizada en cada proyecto.
              </p>
              <div className="flex justify-center md:justify-start space-x-4">
                <div className="bg-orange-500 p-2 rounded-lg">
                  <Phone className="h-5 w-5" />
                </div>
                <div className="bg-orange-500 p-2 rounded-lg">
                  <Mail className="h-5 w-5" />
                </div>
                <div className="bg-orange-500 p-2 rounded-lg">
                  <MapPin className="h-5 w-5" />
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Servicios</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Ventanas y puertas</li>
                <li>Fachadas comerciales</li>
                <li>Cristal de seguridad</li>
                <li>Espejos decorativos</li>
                <li>Barandales y domos</li>
                <li>Mantenimiento</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contacto</h4>
              <ul className="space-y-2 text-gray-400">
                <li>+52 (555) 123-4567</li>
                <li>info@cristaleriaCyD.com</li>
                <li>Av. Principal #123</li>
                <li>Ciudad, Estado</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Cristalería y Aluminios CyD. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>

    </div>
  )
}
