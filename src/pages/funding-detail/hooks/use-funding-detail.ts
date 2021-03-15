import { useEffect, useState } from 'react';
import QRCode from 'qrcode';

const useFundingDetail = (fid: string) => {
	const [qrImg, setQrImg] = useState<string>();
	const origin = window.location.origin;
	useEffect(() => {
		const generateQrCode = async () => {
			try {
				const qrCode = await QRCode.toDataURL(`${origin}/funding/${fid}`);
				console.log(qrCode);
				setQrImg(qrCode);
			} catch (err) {
				console.log(err);
			}
		}
		generateQrCode();
	}, [fid, origin]);
	return {
		qrImg,
	}
}

export default useFundingDetail;
