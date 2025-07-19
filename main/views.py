from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json

def index(request):
    """Halaman utama platform"""
    return render(request, 'index.html')

def laporkan(request):
    """Halaman untuk melaporkan aktivitas judi online"""
    if request.method == 'POST':
        # Handle form submission - for prototype, just show success message
        # In real implementation, save to database here
        return JsonResponse({'status': 'success', 'message': 'Laporan berhasil dikirim!'})
    return render(request, 'laporkan.html')

def berbagi_cerita(request):
    """Halaman untuk berbagi cerita dan pengalaman"""
    if request.method == 'POST':
        # Handle form submission - for prototype, just show success message
        return JsonResponse({'status': 'success', 'message': 'Cerita berhasil dibagikan!'})
    return render(request, 'berbagi_cerita.html')

def diskusi(request):
    """Halaman forum diskusi"""
    # Dummy data diskusi
    diskusi_data = [
        {
            'id': 1,
            'judul': 'Saya pekerja UMR gaji 5 jt per bulan punya 3 anak, investasi apa yang cocok?',
            'kategori': 'Investasi',
            'penulis': 'Anonymous',
            'tanggal': '2 hari lalu',
            'replies': 12,
            'preview': 'Butuh saran investasi yang aman dan menguntungkan untuk kondisi saya...'
        },
        {
            'id': 2,
            'judul': 'Tips menabung untuk mahasiswa dengan uang saku terbatas',
            'kategori': 'Tabungan',
            'penulis': 'Mahasiswa123',
            'tanggal': '3 hari lalu',
            'replies': 8,
            'preview': 'Bagaimana cara menabung efektif dengan uang saku hanya 500rb per bulan?'
        },
        {
            'id': 3,
            'judul': 'Pengalaman tertipu pinjol ilegal, bagaimana mengatasinya?',
            'kategori': 'Pinjaman',
            'penulis': 'Korban_Pinjol',
            'tanggal': '1 minggu lalu',
            'replies': 15,
            'preview': 'Saya terjebak pinjol dengan bunga tinggi, ada yang punya solusi?'
        }
    ]
    
    context = {
        'diskusi_list': diskusi_data
    }
    return render(request, 'diskusi.html', context)

def bijak_finansial(request):
    """Halaman edukasi finansial"""
    # Dummy data modul edukasi
    modul_data = [
        {
            'id': 1,
            'judul': 'Dasar-dasar Menabung',
            'deskripsi': 'Pelajari cara menabung yang benar dan efektif',
            'level': 'Pemula',
            'durasi': '15 menit'
        },
        {
            'id': 2,
            'judul': 'Mengenal Investasi',
            'deskripsi': 'Pengenalan investasi untuk pemula',
            'level': 'Pemula',
            'durasi': '20 menit'
        },
        {
            'id': 3,
            'judul': 'Bahaya Pinjaman Online',
            'deskripsi': 'Mengenal risiko dan cara menghindari pinjol ilegal',
            'level': 'Semua Level',
            'durasi': '10 menit'
        }
    ]
    
    context = {
        'modul_list': modul_data
    }
    return render(request, 'bijak_finansial.html', context)

def main_sambil_paham(request):
    """Halaman konten edukatif untuk anak-anak"""
    # Dummy data konten
    konten_data = [
        {
            'id': 1,
            'judul': 'Petualangan Si Koin: Belajar Menabung',
            'tipe': 'Komik',
            'target': 'Anak-anak (7-12 tahun)',
            'preview': 'Ikuti petualangan Si Koin dalam belajar pentingnya menabung'
        },
        {
            'id': 2,
            'judul': 'Cerita Andi dan Jebakan Internet',
            'tipe': 'Cerpen',
            'target': 'Remaja (13-17 tahun)',
            'preview': 'Andi hampir tertipu judi online, pelajari cara menghindarinya'
        },
        {
            'id': 3,
            'judul': 'Keluarga Bijak: Mengatur Uang Saku',
            'tipe': 'Komik',
            'target': 'Anak-anak (8-14 tahun)',
            'preview': 'Belajar mengatur uang saku dengan bijak bersama keluarga'
        }
    ]
    
    context = {
        'konten_list': konten_data
    }
    return render(request, 'main_sambil_paham.html', context)

def berita(request):
    """Halaman berita terkini"""
    # Dummy data berita
    berita_data = [
        {
            'id': 1,
            'judul': 'Kominfo Blokir 1000+ Situs Judi Online dalam Sebulan',
            'tanggal': '19 Juli 2025',
            'kategori': 'Regulasi',
            'ringkasan': 'Kementerian Komunikasi dan Informatika melaporkan pemblokiran massal situs judi online...',
            'sumber': 'Detik.com'
        },
        {
            'id': 2,
            'judul': 'Kerugian Negara Akibat Judi Online Capai Rp 300 Triliun',
            'tanggal': '18 Juli 2025',
            'kategori': 'Ekonomi',
            'ringkasan': 'Bank Indonesia melaporkan kerugian ekonomi yang signifikan akibat maraknya judi online...',
            'sumber': 'Kompas.com'
        },
        {
            'id': 3,
            'judul': 'Tips Investasi Aman untuk Generasi Z',
            'tanggal': '17 Juli 2025',
            'kategori': 'Edukasi',
            'ringkasan': 'Financial planner berbagi tips investasi yang aman dan menguntungkan untuk anak muda...',
            'sumber': 'CNN Indonesia'
        }
    ]
    
    context = {
        'berita_list': berita_data
    }
    return render(request, 'berita.html', context)