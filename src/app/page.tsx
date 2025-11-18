import BusinessCategories from '@/components/homepage/business-categories';
import Cta from '@/components/homepage/cta';
import FeaturesPlanet from '@/components/homepage/features-planet';
import HeroHome from '@/components/homepage/hero-home';
import LargeTestimonial from '@/components/homepage/large-testimonial';
import { WalletProvider } from '@/context/WalletContext';
import WalletCard from '@/components/wallet/WalletCard';
import { Inter } from "next/font/google";

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
	display: "swap",
});

export default function Home() {
	return (
		<>
			<html lang="en" className="scroll-smooth">
				<body
					className={`${inter.variable} bg-gray-50 font-inter tracking-tight text-gray-900 antialiased`}
				>
										<WalletProvider>
											<div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
												{/* Wallet card for demo deposit */}
												<WalletCard />
												<HeroHome />
												<BusinessCategories />
												<FeaturesPlanet />
												<LargeTestimonial />
												<Cta />
											</div>
										</WalletProvider>
				</body>
			</html>

		</>
	);
}