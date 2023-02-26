import dynamic from "next/dynamic";

const PageContent = dynamic(() => import("../components/Sleep/SleepGoals"), {
	ssr: false,
});

export default function Page() {
	return (
		<main>
			<PageContent />
		</main>
	);
}
