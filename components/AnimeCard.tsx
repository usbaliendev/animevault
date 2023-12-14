import Image from "next/image";
import { MotionDiv } from "./MotionDiv";

export interface AnimeProp {
	id: string;
	name: string;
	image: {
		original: string;
	};
	kind: string;
	episodes: number;
	episodes_aired: number;
	score: string;
	status: string;
}

interface Prop {
	anime: AnimeProp;
	index: number;
}

const variants = {
	hidden: { opacity: 0 },
	visible: { opacity: 1 },
};

function AnimeCard({ anime, index }: Prop) {
	return (
		<MotionDiv
			variants={variants}
			initial="hidden"
			animate="visible"
			transition={{
				delay: index * 0.18,
				ease: "easeInOut",
				duration: 0.5,
			}}
			viewport={{ amount: 0 }}
			className="max-w-sm rounded relative w-full"
		>
			<div className="relative w-full h-[35vh] max-h-[320px]">
				<Image
					src={`https://shikimori.one${anime.image.original}`}
					alt={anime.name}
					fill
					className="rounded-xl"
				/>
			</div>

			<div className="py-4 flex flex-col gap-3">
				<div className="flex justify-between items-center gap-1">
					<h2 className="font-bold text-white text-xl line-clamp-1 w-full">
						{anime.name}
					</h2>
					<div className="py-1 px-2 bg-[#161921] rounded-sm">
						<p className="text-white text-sm font-bold capitalize">
							{anime.kind}
						</p>
					</div>
				</div>
				<div className="flex gap-4 items-center">
					<div className="flex flex-row gap-2 items-center">
						<Image
							src="./episodes.svg"
							alt="episodes"
							width={20}
							height={20}
							className="object-contain"
						/>
						<p className="text-base text-white font-bold">
							{anime.episodes || anime.episodes_aired}
						</p>
					</div>
					<div className="flex flex-row gap-2 items-center">
						<Image
							src="./star.svg"
							alt="star"
							width={18}
							height={18}
							className="object-contain"
						/>
						<p className="text-base font-bold text-[#FFAD49]">{anime.score}</p>
					</div>
				</div>
			</div>
			<div className="flex justify-center items-center">
				{anime.status === "ongoing" ? (
					<p className="text-sm font-bold py-1 px-2 bg-[#0b250a] text-[#42bd3e]">
						em andamento
					</p>
				) : anime.status == "released" ? (
					<p className="text-sm  font-bold bg-[#270e33] text-[#8236a5] py-1 px-2 rounded-sm">
						finalizado
					</p>
				) : (
					<p className="text-sm font-bold bg-[#350e0e] text-[#ff5151] py-1 px-2 rounded-sm">
						na
					</p>
				)}
			</div>
		</MotionDiv>
	);
}

export default AnimeCard;
