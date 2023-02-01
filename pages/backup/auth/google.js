import dynamic from "next/dynamic";

const GoogleAuth = dynamic(() => import("../../../components/GoogleAuth"), {
	ssr: false,
});

export default function GoogleAuthPage() {
	return (
		<main>
			<GoogleAuth />
		</main>
	);
}
