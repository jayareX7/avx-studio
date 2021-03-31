import serviceList from '../components/service-list'
import Link from 'next/link'
import Thumbnail from './service-thumbnail'

export default function ServiceHero({
  title,
  design_tags,
  thumbnail,
  service_description,
  slug,
}) {
  return (
    <section>
    {service_description}
      <div className="md:grid md:grid-cols-2 md:col-gap-16 lg:col-gap-8 mb-20 md:mb-28">
        <div>
          <h3 className="mb-4 text-4xl lg:text-6xl leading-tight">
            <Link as={`/services/${slug}`} href="/services/[slug]">
              <a className="hover:underline">{title}</a>
            </Link>

            <div>
          <p className="text-lg leading-relaxed mb-4">{service_description}</p>
          <Thumbnail  />
        </div>
          </h3>
         
        </div>
         
      </div>
     
           
    </section>
  )
}
