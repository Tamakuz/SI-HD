import connectDB from "@/db/connect";
import Pasien from "@/models/pasien";
import { NextResponse } from "next/server";


export const POST = async (req) => {
  const body = await req.json();
  console.log(body);
  try {
    await connectDB();

    const newPasien = new Pasien({
      ...body,
    });

    await newPasien.save();
    return NextResponse.json(
      { message: "Pendaftaran Berhasil" },
      { status: 201 }
    );
  } catch (error) {
    // console.log(error);
    if (error.name === "ValidationError") {
      // Handle validation errors and send them in the response
      const validationErrors = {};

      for (const field in error.errors) {
        validationErrors[field] = error.errors[field].message;
      }

      return NextResponse.json(
        {
          message: "Validation error",
          errors: validationErrors,
        },
        { status: 400 }
      );
    } else {
      return NextResponse.error(
        { message: "Internal Server Error" },
        { status: 500 }
      );
    }
  }
};

export const GET = async (req) => {
  try {
    const { searchParams } = new URL(req.url);

    let query = {};
    if (searchParams.get("tanggal"))
      query = { ...query, tanggal_daftar: searchParams.get("tanggal") };

    console.log(query);

    const pasiens = await Pasien.find(query);

    return NextResponse.json(pasiens, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.error(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
};
