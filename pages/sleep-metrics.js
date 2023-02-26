import dynamic from "next/dynamic";

const PageContent = dynamic(() => import("../components/Sleep/SleepMetrics"), {
	ssr: false,
});

export default function Page() {
	return (
		<main>
			<PageContent />
		</main>
	);
}
