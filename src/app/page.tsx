import BusinessCategories from '@/components/homepage/business-categories';
import Cta from '@/components/homepage/cta';
import FeaturesPlanet from '@/components/homepage/features-planet';
import HeroHome from '@/components/homepage/hero-home';
import LargeTestimonial from '@/components/homepage/large-testimonial';

export default function Home() {
	return (
		<>
			<HeroHome />
			<BusinessCategories />
			<FeaturesPlanet />
			<LargeTestimonial />
			<Cta />
		</>
	);
}