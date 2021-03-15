import { useEffect, useState } from 'react';
import QRCode from 'qrcode';

const useFundingDetail = (fid: string) => {
	const [qrImg, setQrImg] = useState<string>();
	const origin = 'http://localhost:3000';
	useEffect(() => {
		const generateQrCode = async () => {
			try {
				const qrCode = await QRCode.toDataURL(`${origin}/${fid}`);
				console.log(qrCode);
				setQrImg(qrCode);
			} catch (err) {
				console.log(err);
			}
		}
		generateQrCode();
	}, [fid]);
	return {
		qrImg,
	}
}

export default useFundingDetail;
