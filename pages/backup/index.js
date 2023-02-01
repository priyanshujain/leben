import dynamic from "next/dynamic";

const BackupPage = dynamic(() => import("../../components/Backup"), {
	ssr: false,
});

export default function Backup() {
	return (
		<main>
			<BackupPage />
		</main>
	);
}
