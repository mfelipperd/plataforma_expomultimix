import QRCode from 'qrcode';

const generateQrCode = async (data:any) => {
  try {
    const qrCodeValue = JSON.stringify(data);
    const qrCodeImage = await QRCode.toDataURL(qrCodeValue);
    return qrCodeImage;
  } catch (error) {
    console.error('Erro ao gerar o QR code:', error);
    return null;
  }
};

export default generateQrCode;