import { writeFile } from 'fs/promises';
import { NextResponse } from "next/server";

export  async  function  POST (req){
    const data = await req.formData();
    const file = data.get('file');
    if (!file){
        return NextResponse,json({"message": "no image found", success: false});
    }
        const byteData = await file.arrayBuffer();
        const buffer = Buffer.from(byteData);
        const path = `./public/${file.name}` 
        await writeFile(path, buffer);
        return NextResponse.json({"message": "file uploaded successfully", success: true});

    }








// import { NextResponse } from "next/server";
// import { writeFile } from "fs/promises"; // Import the writeFile function

// export async function POST(req) {
//   try {
//     const data = await req.formData();
//     const file = data.get("file");

//     if (!file) {
//       return NextResponse.json({ message: "No image found", success: false });
//     }

//     const byteData = await file.arrayBuffer();
//     const buffer = Buffer.from(byteData);
//     const path = `./public/${file.name}`;

//     // Write the file to the specified path
//     await writeFile(path, buffer);

//     return NextResponse.json({
//       message: "File uploaded successfully",
//       success: true,
//     });
//   } catch (error) {
//     console.error("Error uploading file:", error);
//     return NextResponse.json({ message: "File upload failed", success: false });
//   }
// }
