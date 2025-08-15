import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from '@/components/ui/icon';

const Index = () => {
  const services = [
    {
      title: "Ремонт фасадов",
      description: "Профессиональное восстановление и отделка фасадов зданий любой сложности",
      icon: "Building2"
    },
    {
      title: "Ремонт крыш",
      description: "Замена кровельных материалов, устранение протечек, утепление",
      icon: "Home"
    },
    {
      title: "Гидроизоляция",
      description: "Защита от влаги фундамента, стен и кровли современными материалами",
      icon: "Shield"
    },
    {
      title: "Утепление",
      description: "Энергоэффективное утепление фасадов и крыш для снижения затрат на отопление",
      icon: "Thermometer"
    }
  ];

  const portfolio = [
    {
      title: "Жилой комплекс на Васильевском острове",
      description: "Комплексный ремонт фасада с утеплением",
      category: "Фасады"
    },
    {
      title: "Торговый центр на Невском проспекте", 
      description: "Замена кровли и гидроизоляция",
      category: "Кровля"
    },
    {
      title: "Офисное здание в Московском районе",
      description: "Реставрация исторического фасада",
      category: "Реставрация"
    }
  ];

  const guarantees = [
    {
      title: "Гарантия качества",
      description: "5 лет гарантии на все виды работ",
      icon: "Award"
    },
    {
      title: "Сертифицированные материалы",
      description: "Работаем только с проверенными поставщиками",
      icon: "Certificate"
    },
    {
      title: "Опытная команда",
      description: "Более 15 лет опыта работы в Санкт-Петербурге",
      icon: "Users"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-primary">СтройФасад СПб</div>
          <nav className="hidden md:flex space-x-8">
            <a href="#services" className="text-gray-600 hover:text-primary transition-colors">Услуги</a>
            <a href="#portfolio" className="text-gray-600 hover:text-primary transition-colors">Портфолио</a>
            <a href="#about" className="text-gray-600 hover:text-primary transition-colors">О компании</a>
            <a href="#guarantees" className="text-gray-600 hover:text-primary transition-colors">Гарантии</a>
            <a href="#contacts" className="text-gray-600 hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button>Заказать звонок</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-blue-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Профессиональный ремонт фасадов и крыш в Санкт-Петербурге</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Надежные строительные услуги с гарантией качества. Более 500 успешно завершенных проектов.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100">
              Получить консультацию
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              Посмотреть работы
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Наши услуги</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Предоставляем полный спектр услуг по ремонту и обслуживанию фасадов и кровель
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name={service.icon} size={32} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Наши работы</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Примеры успешно завершенных проектов в Санкт-Петербурге
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {portfolio.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gray-200 relative bg-cover bg-center" style={{backgroundImage: `url('/img/${index === 0 ? '1e2a020d-ba44-4768-861b-f6e3818f6e6b.jpg' : index === 1 ? '090bbc4b-fcf9-431f-b1e2-d7500d4bf42e.jpg' : '1e2a020d-ba44-4768-861b-f6e3818f6e6b.jpg'}')`}}>
                  <Badge className="absolute top-4 left-4">{project.category}</Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">О компании</h2>
              <p className="text-gray-600 text-lg mb-6">
                СтройФасад СПб — ведущая строительная компания Санкт-Петербурга, специализирующаяся 
                на ремонте фасадов и кровель. Мы работаем на рынке более 15 лет и успешно завершили 
                свыше 500 проектов.
              </p>
              <div className="grid grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">500+</div>
                  <div className="text-gray-600">Проектов</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">15+</div>
                  <div className="text-gray-600">Лет опыта</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">50+</div>
                  <div className="text-gray-600">Специалистов</div>
                </div>
              </div>
            </div>
            <div className="h-96 bg-gray-200 rounded-lg bg-cover bg-center" style={{backgroundImage: "url('/img/87334afa-078d-419b-b537-e87410910572.jpg')"}}></div>
          </div>
        </div>
      </section>

      {/* Guarantees Section */}
      <section id="guarantees" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Наши гарантии</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Мы уверены в качестве наших работ и предоставляем надежные гарантии
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {guarantees.map((guarantee, index) => (
              <Card key={index} className="text-center p-8 hover:shadow-lg transition-shadow">
                <div className="mx-auto mb-6 w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name={guarantee.icon} size={40} className="text-primary" />
                </div>
                <CardTitle className="text-xl mb-4">{guarantee.title}</CardTitle>
                <CardDescription className="text-gray-600">
                  {guarantee.description}
                </CardDescription>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacts" className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-6">Свяжитесь с нами</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Icon name="Phone" size={24} />
                  <span className="text-lg">+7 (812) 123-45-67</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Icon name="Mail" size={24} />
                  <span className="text-lg">info@stroyfasad-spb.ru</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Icon name="MapPin" size={24} />
                  <span className="text-lg">Санкт-Петербург, ул. Строителей, 15</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Icon name="Clock" size={24} />
                  <span className="text-lg">Пн-Пт: 9:00-18:00, Сб: 10:00-16:00</span>
                </div>
              </div>
            </div>
            <div>
              <Card className="bg-white/10 border-white/20">
                <CardHeader>
                  <CardTitle className="text-white">Получить консультацию</CardTitle>
                  <CardDescription className="text-white/80">
                    Оставьте заявку и мы свяжемся с вами в течение часа
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <input 
                    type="text" 
                    placeholder="Ваше имя" 
                    className="w-full p-3 rounded-md bg-white/10 border border-white/20 text-white placeholder-white/60"
                  />
                  <input 
                    type="tel" 
                    placeholder="Телефон" 
                    className="w-full p-3 rounded-md bg-white/10 border border-white/20 text-white placeholder-white/60"
                  />
                  <textarea 
                    placeholder="Описание задачи" 
                    rows={3}
                    className="w-full p-3 rounded-md bg-white/10 border border-white/20 text-white placeholder-white/60 resize-none"
                  />
                  <Button className="w-full bg-white text-primary hover:bg-gray-100">
                    Отправить заявку
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-xl font-bold mb-4">СтройФасад СПб</div>
              <p className="text-gray-400">
                Надежный партнер в строительстве и ремонте
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Ремонт фасадов</li>
                <li>Ремонт крыш</li>
                <li>Гидроизоляция</li>
                <li>Утепление</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-gray-400">
                <li>О нас</li>
                <li>Портфолио</li>
                <li>Гарантии</li>
                <li>Контакты</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-400">
                <div>+7 (812) 123-45-67</div>
                <div>info@stroyfasad-spb.ru</div>
                <div>Санкт-Петербург</div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 СтройФасад СПб. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;