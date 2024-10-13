import React, { useEffect, useState } from "react";
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';

const Test: React.FC = () => {
  console.log("Test component is rendering");

  const [imageUrl] = useState('https://files.jotform.com/jufs/jonamdahl2/242856634248061/6045860397419267693/frame.png?md5=lI4DCuJYAT01CfSsRpH5TA&expires=1728777475');
  const [uploadedUrl, setUploadedUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    console.log("useEffect is running");
    let isMounted = true;

    const uploadImageToS3 = async (imageUrl: string, key: string): Promise<string> => {
      try {
        // Fetch the image
        const response = await fetch(imageUrl);
        if (!response.ok) throw new Error('Failed to fetch image');
        const blob = await response.blob();
    
        // Create S3 client
        const s3Client = new S3Client({
          region: import.meta.env.VITE_AWS_REGION,
          credentials: {
            accessKeyId: import.meta.env.VITE_AWS_ACCESS_KEY_ID!,
            secretAccessKey: import.meta.env.VITE_AWS_SECRET_ACCESS_KEY!,
          },
          forcePathStyle: true // This can help with CORS issues
        });
    
        // Prepare and send PutObjectCommand
        const command = new PutObjectCommand({
          Bucket: import.meta.env.VITE_S3_BUCKET_NAME,
          Key: key,
          Body: new Uint8Array(await blob.arrayBuffer()),
          ContentType: blob.type,
          // ACL line removed
        });
    
        await s3Client.send(command);
    
        // Construct and return the file URL
        const fileUrl = `https://${import.meta.env.VITE_S3_BUCKET_NAME}.s3.${import.meta.env.VITE_AWS_REGION}.amazonaws.com/${key}`;
        return fileUrl;
      } catch (error) {
        console.error('Error uploading image to S3', error);
        throw error;
      }
    };

    const uploadImage = async () => {
      const s3Key = `uploads/${Date.now()}-image.jpg`;
      try {
        const s3Url = await uploadImageToS3(imageUrl, s3Key);
        if (isMounted) {
          console.log('Uploaded Image URL:', s3Url);
          setUploadedUrl(s3Url);
        }
      } catch (error) {
        console.error('Error uploading image:', error);
        if (isMounted) {
          setError('Failed to upload image. Please check your console for more details.');
        }
      }
    };

    uploadImage();

    return () => {
      isMounted = false;
    };
  }, [imageUrl]);

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <img 
          src={uploadedUrl || imageUrl} 
          alt="Uploaded image" 
          className="max-w-md shadow-lg rounded-lg mb-4"
        />
    </div>
  );
};

export default Test;
