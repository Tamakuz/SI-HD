import mongoose from "mongoose";

const pasienSchema = new mongoose.Schema(
  {
    nama: {
      type: String,
      required: true,
    },
    kepada: {
      type: String,
      enum: ["Tn", "Ny", "Sdr"],
      required: [true, "Gelar pasien wajib dipilih."],
    },
    rekam_medis: {
      type: String,
    },
    kehadiran: {
      type: String,
      enum: ["Datang", "Tidak datang"],
      default: "Tidak datang",
    },
    tensi_awal: {
      type: Number,
      default: 0,
    },
    tensi_akhir: {
      type: Number,
      default: 0,
    },
    status_pasien: {
      type: String,
      enum: ["Rawat jalan", "Rawat inap", "Traveling"],
      required: true,
    },
    aksesVaskuler: {
      type: String,
      enum: ["Avshunt", "CDL", "Vena femoral", "Arteri"],
    },
    injeksiEPO: {
      type: String,
      enum: ["IYA", "TIDAK"],
    },
    heparin: {
      type: String,
      enum: ["FREE", "MINIMAL", "STANDART", "OPSIONAL"],
    },
    tanggal_daftar: {
      type: Number,
      required: true,
    },
    bulan_daftar: {
      type: Number,
      required: true,
    },
    tahun_daftar: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Pasien || mongoose.model("Pasien", pasienSchema);
