import Image from "next/image";

function Hero() {
	return (
		<header className="bg-hero bg-center bg-cover bg-no-repeat sm:p-16 py-16 px-8 flex justify-center lg:items-center max-lg:flex-col w-full sm:gap-16 gap-0">
			<div className="flex-1 flex flex-col gap-10">
				<Image
					src="/gojo-edited1.jpg"
					alt="logo"
					width={101}
					height={96}
					className="object-contain rounded-3xl"
				/>
				<h1 className="sm:text-6xl text-5xl text-white lg:max-w-lg font-bold leading-[120%]">
					Explore o <br /> <span className="red-gradient">Vasto Universo</span>{" "}
					dos Animes
				</h1>
				<h2 className="sm:text-3xl text-2xl text-white lg:max-w-lg font-bold leading-[80%] grey-gradient">
					manhwas também, em breve...
				</h2>
			</div>
			<div className="lg:flex-1 relative w-full h-[30vh] justify-center">
				<Image src="/anime.png" alt="anime" fill className="object-contain rounded-[40%]" />
			</div>
		</header>
	);
}

export default Hero;
