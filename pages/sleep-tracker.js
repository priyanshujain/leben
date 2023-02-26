import dynamic from "next/dynamic";

const PageContent = dynamic(() => import("../components/Sleep/SleepTracker"), {
	ssr: false,
});

export default function Page() {
	return (
		<main>
			<PageContent />
		</main>
	);
}
