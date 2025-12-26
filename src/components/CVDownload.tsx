import { Download } from "lucide-react";
import { GradientButton } from "@/components/ui/gradient-button";

const CVDownload = () => {
    const handleDownload = () => {
        const cvUrl = "/AyazMirzaResume.pdf";
        const link = document.createElement("a");
        link.href = cvUrl;
        link.download = "Ayaz_Resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <GradientButton variant="download" onClick={handleDownload}>
            <Download className="h-5 w-5 mr-2" />
            Download Resume
        </GradientButton>
    );
};

export default CVDownload;

