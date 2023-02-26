import dynamic from "next/dynamic";

const ReportPage = dynamic(() => import("../components/Report"), {
	ssr: false,
});

export default function Report() {
	return (
		<main>
			<ReportPage />
		</main>
	);
}
