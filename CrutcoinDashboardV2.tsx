// Crutcoin Dashboard V2 - Lanjutan (Refresh)

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Coins, Wallet, Link2, Repeat, FileText, QrCode, UserPlus, ShieldAlert, PhoneCall } from 'lucide-react';

const data = [
  { name: 'Jan', value: 120 },
  { name: 'Feb', value: 210 },
  { name: 'Mar', value: 160 },
  { name: 'Apr', value: 300 },
  { name: 'May', value: 260 },
  { name: 'Jun', value: 380 },
];

export default function CrutcoinDashboardV2() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 p-4">
      {/* Grafik Harga */}
      <Card className="shadow-md rounded-2xl p-4 col-span-2">
        <CardContent>
          <h2 className="text-xl font-bold mb-2 flex items-center gap-2">
            <Coins className="text-yellow-500" /> Harga CRUT/BNB (Simulasi)
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="value" stroke="#8884d8" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Aksi Cepat */}
      <Card className="shadow-md rounded-2xl p-4">
        <CardContent className="flex flex-col gap-4">
          <h2 className="text-xl font-bold">Aksi Cepat</h2>
          <Button variant="default" className="flex items-center gap-2">
            <Wallet className="w-4 h-4" /> Koneksi Wallet
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <Link2 className="w-4 h-4" /> Lihat Pair CRUT/BNB
          </Button>
          <Button variant="ghost" className="flex items-center gap-2">
            <Repeat className="w-4 h-4" /> Simulasi Penukaran
          </Button>
          <Button variant="secondary" className="flex items-center gap-2">
            <QrCode className="w-4 h-4" /> QR Wallet Resmi
          </Button>
          <Button variant="secondary" className="flex items-center gap-2">
            <FileText className="w-4 h-4" /> Download Dokumen CRUT
          </Button>
          <Button variant="outline" className="flex items-center gap-2" asChild>
            <a href="https://wa.me/6282333559615" target="_blank" rel="noopener noreferrer">
              <PhoneCall className="w-4 h-4 text-green-500" /> Hubungi Admin
            </a>
          </Button>
          <Button variant="destructive" className="flex items-center gap-2">
            <ShieldAlert className="w-4 h-4" /> BERBAHAYA! Wallet Bisa Terblokir
          </Button>
        </CardContent>
      </Card>

      {/* Info Supply & Konversi */}
      <Card className="shadow-md rounded-2xl p-4 col-span-3">
        <CardContent>
          <h2 className="text-xl font-bold mb-4">Informasi Supply & Konversi</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-blue-100 p-4 rounded-xl">
              <p className="text-sm text-gray-600">Total Supply</p>
              <p className="text-lg font-bold">100,000,000,000,000 CRUT</p>
            </div>
            <div className="bg-green-100 p-4 rounded-xl">
              <p className="text-sm text-gray-600">Konversi Dasar</p>
              <p className="text-lg font-bold">1.000.000 CRUT = 3 USDT</p>
            </div>
            <div className="bg-yellow-100 p-4 rounded-xl">
              <p className="text-sm text-gray-600">Nilai Token (IDR)</p>
              <p className="text-lg font-bold">± Rp 45 / Juta CRUT</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Formulir Member */}
      <Card className="shadow-md rounded-2xl p-4 col-span-3">
        <CardContent className="flex flex-col gap-4">
          <h2 className="text-xl font-bold text-center">💎 Dari Holder Menjadi Warga CRUTCOIN</h2>
          <p className="text-gray-700 text-sm text-center">
            Selamat datang di Kawasan CRUTCOIN. Anda bukan hanya pemilik token digital.
            Anda adalah bagian dari komunitas masa depan yang akan membangun ekosistem
            keuangan berbasis kepercayaan dan kebersamaan.
          </p>
          <ul className="text-sm text-gray-600 list-disc list-inside">
            <li>Akses lebih dekat ke program komunitas</li>
            <li>Kesempatan reward & kolaborasi</li>
            <li>Edukasi lanjutan & prioritas perkembangan proyek</li>
          </ul>
          <p className="text-xs italic text-center">
            "Kami percaya: Token bukan hanya angka. Ia adalah nilai. Dan nilai itu tumbuh dalam komunitas."
          </p>
          <p className="text-center text-sm text-blue-700 font-medium">
            🎯 Target Komunitas: 1.000 Member Pertama dalam 3 Bulan — 10.000 di Tahun Pertama
          </p>

          <h2 className="text-xl font-bold flex items-center gap-2 mt-4">
            <UserPlus className="w-5 h-5" /> Formulir Gabung Jadi Member CRUTCOIN
          </h2>
          <Label htmlFor="nama">Nama Lengkap</Label>
          <Input id="nama" placeholder="Masukkan nama lengkap Anda" />

          <Label htmlFor="email">Email / Kontak WhatsApp</Label>
          <Input id="email" placeholder="Masukkan email atau WA aktif" />

          <Label htmlFor="wallet">Alamat Wallet</Label>
          <Input id="wallet" placeholder="0x..." />

          <Button variant="default" className="mt-4">Kirim Formulir</Button>
        </CardContent>
      </Card>
    </div>
  );
}