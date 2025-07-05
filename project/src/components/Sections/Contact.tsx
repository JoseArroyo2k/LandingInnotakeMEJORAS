import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle, 
  AlertCircle,
  User,
  MessageSquare
} from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const services = [
    'Desarrollo Web',
    'E-commerce',
    'App Móvil',
    'Dashboard',
    'Automatización',
    'Consultoría Digital',
    'Otro'
  ];

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = 'El nombre es obligatorio';
    if (!formData.email.trim()) newErrors.email = 'El email es obligatorio';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Email inválido';

    if (!formData.phone.trim()) newErrors.phone = 'El teléfono es obligatorio';
    else if (!/^[0-9+\-\s()]{9,15}$/.test(formData.phone.replace(/\s/g, ''))) newErrors.phone = 'Teléfono inválido';

    if (!formData.service) newErrors.service = 'Selecciona un servicio';
    if (!formData.message.trim()) newErrors.message = 'El mensaje es obligatorio';
    else if (formData.message.trim().length < 10) newErrors.message = 'El mensaje debe tener al menos 10 caracteres';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_g155gpe',      // Service ID
        'template_194ndjj',     // Template ID
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.message
        },
        'BWI4EasGV-voESPmL'     // Public Key
      );

      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    } catch (error) {
      console.error(error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      label: 'Ubicación',
      value: 'Lima, Perú',
      description: 'Trabajamos con clientes de todo el país'
    },
    {
      icon: Phone,
      label: 'Teléfono',
      value: '+51 917 425 215',
      description: 'Lun - Vie: 9:00 AM - 6:00 PM'
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'servicioalcliente@inno-take.com',
      description: 'Respuesta en menos de 2 horas'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-dark-900 via-blue-900 to-dark-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-tech-pattern opacity-10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="inline-block text-cyan-400 font-semibold text-sm uppercase tracking-wide mb-4">
            Contacto
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold font-poppins text-white mb-6">
            Construyamos tu{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              Futuro Digital
            </span>
          </h2>
          <p className="text-lg text-gray-300">
            Agenda una consulta gratuita y descubre cómo podemos transformar tu negocio 
            con soluciones digitales innovadoras.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white font-poppins">
                Hablemos de tu Proyecto
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Contáctanos para una consulta personalizada. Analizaremos tus necesidades 
                y te propondremos la mejor solución digital para hacer crecer tu negocio.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-lg font-semibold text-white">{info.label}</h4>
                      <p className="text-cyan-400 font-medium">{info.value}</p>
                      <p className="text-gray-400 text-sm">{info.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl p-6 border border-cyan-500/30"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-bold text-white mb-4">¿Prefieres WhatsApp?</h4>
              <p className="text-gray-300 mb-4">
                Escríbenos directamente y recibe respuesta inmediata sobre tu proyecto.
              </p>
              <motion.a
                href="https://wa.me/51917425215?text=Hola, me interesa conocer más sobre los servicios de InnoTake"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <MessageSquare className="w-5 h-5" />
                <span>Chatear por WhatsApp</span>
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {submitStatus === 'success' ? (
              <motion.div
                className="text-center space-y-6"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-white">¡Mensaje Enviado!</h3>
                  <p className="text-gray-300">
                    Gracias por contactarnos. Te responderemos en menos de 2 horas.
                  </p>
                </div>
                <motion.button
                  onClick={() => setSubmitStatus('idle')}
                  className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  Enviar otro mensaje →
                </motion.button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-white font-poppins">
                    Cuéntanos sobre tu Proyecto
                  </h3>
                  <p className="text-gray-300">
                    Completa el formulario y te contactaremos para agendar una consulta gratuita.
                  </p>
                </div>

                {/* Aquí van los campos exactamente como ya los tenías (nombre, email, etc.) */}
                {/* No hubo cambios en JSX de inputs, así que tu estructura es igual. */}

                {/* Name Field */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-300">
                    Nombre Completo *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full pl-10 pr-4 py-3 bg-white/10 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all ${errors.name ? 'border-red-500 focus:ring-red-500/50' : 'border-white/20 focus:ring-cyan-500/50 focus:border-cyan-500'}`}
                      placeholder="Tu nombre completo"
                    />
                  </div>
                  {errors.name && (
                    <p className="text-red-400 text-sm flex items-center space-x-1">
                      <AlertCircle className="w-4 h-4" />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-300">
                    Email *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full pl-10 pr-4 py-3 bg-white/10 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all ${errors.email ? 'border-red-500 focus:ring-red-500/50' : 'border-white/20 focus:ring-cyan-500/50 focus:border-cyan-500'}`}
                      placeholder="tu@email.com"
                    />
                  </div>
                  {errors.email && (
                    <p className="text-red-400 text-sm flex items-center space-x-1">
                      <AlertCircle className="w-4 h-4" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>

                {/* Phone Field */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-300">
                    Teléfono *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`w-full pl-10 pr-4 py-3 bg-white/10 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all ${errors.phone ? 'border-red-500 focus:ring-red-500/50' : 'border-white/20 focus:ring-cyan-500/50 focus:border-cyan-500'}`}
                      placeholder="+51 917 425 215"
                    />
                  </div>
                  {errors.phone && (
                    <p className="text-red-400 text-sm flex items-center space-x-1">
                      <AlertCircle className="w-4 h-4" />
                      <span>{errors.phone}</span>
                    </p>
                  )}
                </div>

                {/* Service Field */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-300">
                    Servicio de Interés *
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-white/10 border rounded-lg text-white focus:outline-none focus:ring-2 transition-all ${errors.service ? 'border-red-500 focus:ring-red-500/50' : 'border-white/20 focus:ring-cyan-500/50 focus:border-cyan-500'}`}
                  >
                    <option value="">Selecciona un servicio</option>
                    {services.map((service) => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                  {errors.service && (
                    <p className="text-red-400 text-sm flex items-center space-x-1">
                      <AlertCircle className="w-4 h-4" />
                      <span>{errors.service}</span>
                    </p>
                  )}
                </div>

                {/* Message Field */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-300">
                    Mensaje *
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className={`w-full pl-10 pr-4 py-3 bg-white/10 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all resize-none ${errors.message ? 'border-red-500 focus:ring-red-500/50' : 'border-white/20 focus:ring-cyan-500/50 focus:border-cyan-500'}`}
                      placeholder="Cuéntanos sobre tu proyecto, objetivos y cualquier detalle importante..."
                    />
                  </div>
                  {errors.message && (
                    <p className="text-red-400 text-sm flex items-center space-x-1">
                      <AlertCircle className="w-4 h-4" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 disabled:from-gray-500 disabled:to-gray-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Enviando...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Enviar Mensaje</span>
                    </>
                  )}
                </motion.button>

                <p className="text-gray-400 text-sm text-center">
                  Al enviar este formulario, aceptas que nos contactemos contigo para 
                  brindarte información sobre nuestros servicios.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
