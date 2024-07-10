const questions = {
  section1: [
    {
      question:
        "Setelah mencuci wajah Anda, jangan mengoleskan pelembap, tabir surya, toner, bedak, atau produk lainnya. Dua hingga tiga jam kemudian, lihatlah di cermin di bawah cahaya terang. Dahi dan pipi Anda terasa atau terlihat.",
      answers: [
        "Sangat kasar, bersisik, atau abu-abu",
        "Ketat",
        "Terhidrasi dengan baik tanpa pantulan cahaya",
        "Berkilau dengan pantulan cahaya terang",
      ],
      scores: [1, 2, 3, 4],
    },
    {
      question: "Dalam foto, wajah Anda terlihat berkilau.",
      answers: [
        "Tidak pernah, atau Anda tidak pernah memperhatikan kilauan",
        "Kadang-kadang",
        "Sering",
        "Selalu",
      ],
      scores: [1, 2, 3, 4],
    },
    {
      question:
        "Dua hingga tiga jam setelah mengoleskan dasar makeup (juga dikenal sebagai foundation), tetapi tanpa bedak, makeup Anda terlihat.",
      answers: [
        "Bersisik atau terkumpul di kerutan",
        "Halus",
        "Berkilau",
        "Bergaris dan berkilau",
        "Saya tidak mengenakan dasar wajah (foundation)",
      ],
      scores: [1, 2, 3, 4, 2.5],
    },
    {
      question:
        "Ketika berada dalam lingkungan dengan kelembaban rendah, jika Anda tidak menggunakan pelembap atau tabir surya, kulit wajah Anda dapat menjadi",
      answers: [
        "Terasa sangat kering atau retak",
        "Terasa kencang",
        "Terasa normal",
        "Terlihat berkilau, atau saya tidak pernah merasa perlu menggunakan pelembap",
        "Tidak tahu",
      ],
      scores: [1, 2, 3, 4, 2.5],
    },
    {
      question:
        "Lihatlah di cermin pembesar. Berapa banyak pori besar, seukuran ujung jarum atau lebih besar, yang Anda miliki?",
      answers: [
        "Tidak ada",
        "Beberapa di zona T (dahi dan hidung) saja",
        "Banyak",
        "Banyak sekali!",
        "Tidak tahu",
      ],
      scores: [1, 2, 3, 4, 2.5],
    },
    {
      question: "Anda akan menggambarkan kulit wajah Anda sebagai:",
      answers: ["Kering", "Normal", "Kombinasi", "Berminyak"],
      scores: [1, 2, 3, 4],
    },
    {
      question:
        "Ketika Anda menggunakan sabun yang menghasilkan busa dan berbusa dengan kuat, kulit wajah Anda",
      answers: [
        "Terasa kering atau retak",
        "Terasa sedikit kering tetapi tidak retak",
        "Terasa normal",
        "Terasa berminyak",
        "Saya tidak menggunakan sabun atau pembersih berbusa lainnya",
      ],
      scores: [1, 2, 3, 4, 2.5],
    },
    {
      question: "Jika tidak diberi pelembap, kulit wajah Anda terasa kencang",
      answers: ["Selalu", "Kadang-kadang", "Jarang", "Tidak pernah"],
      scores: [1, 2, 3, 4],
    },
    {
      question:
        "Anda memiliki pori-pori yang tersumbat (komedo hitam atau putih)",
      answers: ["Tidak pernah", "Jarang", "Kadang-kadang", "Selalu"],
      scores: [1, 2, 3, 4],
    },
    {
      question: "Wajah Anda berminyak di zona T (dahi dan hidung)",
      answers: ["Tidak pernah", "Kadang-kadang", "Sering", "Selalu"],
      scores: [1, 2, 3, 4],
    },
    {
      question: "Dua hingga tiga jam setelah mengoleskan pelembap, pipi Anda",
      answers: [
        "Sangat kasar, bersisik, atau abu-abu",
        "Halus",
        "Sedikit berkilau",
        "Berkilau dan licin, atau saya tidak menggunakan pelembap",
      ],
      scores: [1, 2, 3, 4],
    },
  ],
  section2: [
    {
      question: "Anda mendapatkan benjolan merah di wajah anda",
      answers: ["Tidak Pernah", "Jarang", "Sebulan sekali", "Seminggu sekali"],
      scores: [1, 2, 3, 4],
    },
    {
      question:
        "Produk perawatan kulit (termasuk pembersih, pelembab, toner, dan riasan) menyebabkan wajah Anda berjerawat, mengalami ruam, gatal, atau perih:",
      answers: [
        "Tidak Pernah",
        "Jarang",
        "Sering",
        "Selalu",
        "Tidak pernah menggunakan produk perawatan kulit",
      ],
      scores: [1, 2, 3, 4, 2.5],
    },
    {
      question: "Pernahkah Anda didiagnosis menderita jerawat atau rosacea?",
      answers: [
        "Tidak",
        "Kenalan saya mengatakan saya mempunyainya",
        "Iya",
        "Iya, kasus yang parah",
        "Tidak yakin",
      ],
      scores: [1, 2, 3, 4, 2.5],
    },
    {
      question:
        "Jika anda menggunakan perhiasan yang bukan emas, seberapa sering anda mendapatkan ruam?",
      answers: ["Tidak pernah", "Jarang", "Sering", "Selalu", "Tidak yakin"],
      scores: [1, 2, 3, 4, 0],
    },
    {
      question:
        "Sunscreen membuat kulit Anda gatal, terbakar, breakout atau memerah",
      answers: [
        "Tidak pernah",
        "Jarang",
        "Sering",
        "Selalu",
        "Tidak pernah menggunakan sunscreen",
      ],
      scores: [1, 2, 3, 4, 2.5],
    },
    {
      question:
        "Pernahkah Anda didiagnosis menderita dermatitis atopik, eksim, atau dermatitis kontak (ruam kulit analergi)?",
      answers: [
        "Tidak",
        "Teman pernah mengatakan saya menderitanya",
        "Iya",
        "Iya, dalam kasus yang parah",
        "Tidak yakin",
      ],
      scores: [1, 2, 3, 4, 2.5],
    },
    {
      question: "Seberapa sering Anda mengalami ruam di bawah cincin Anda?",
      answers: [
        "Tidak pernah",
        "Jarang",
        "Sering",
        "Selalu",
        "Saya tidak menggunakan cincin",
      ],
      scores: [1, 2, 3, 4, 2.5],
    },
    {
      question:
        "Mandi busa beraroma, minyak pijat, atau losion tubuh membuat kulit Anda berjerawat, gatal, atau terasa kering",
      answers: [
        "Tidak pernah",
        "Jarang",
        "Sering",
        "Selalu",
        "Saya tidak menggunakan produk diatas",
      ],
      scores: [1, 2, 3, 4, 2.5],
    },
    {
      question:
        "Bisakah anda menggunakan sabun yang disediakan di hotel di tubuh atau wajah anda tanpa masalah?",
      answers: [
        "Iya",
        "Sering, dan saya tidak memilih masalah",
        "Tidak, kulit saya menjadi gatal, memerah atau breaks out",
        "Saya tidak menggunakannya, saya sudah memiliki banyak masalah sebelumnya",
        "Saya membawa miliki saya pribadi, jadi saya tidak yakin",
      ],
      scores: [1, 2, 3, 4, 2.5],
    },
    {
      question:
        "Adakah seseorang di keluarga anda yang di diagnosa menderita dermatitis atopik, eksim, atau dermatitis kontak (ruam kulit analergi)?",
      answers: [
        "Tidak",
        "Seorang anggota keluarga yang saya kenal",
        "Beberapa anggota keluarga",
        "Banyak dari keluarga saya menderita dermatitis atopik, eksim, atau dermatitis kontak (ruam kulit analergi)",
        "Tidak yakin",
      ],
      scores: [1, 2, 3, 4, 2.5],
    },
    {
      question:
        "Apa yang terjadi jika Anda menggunakan deterjen beraroma atau pelicin pakaian di pengering?",
      answers: [
        "Kulitku baik-baik saja",
        "Kulitku terasa sedikit kering",
        "Kulitku menjadi gatal",
        "Kulitku menjadi gatal dan memiliki ruam",
        "Tidak yakin, saya tidak pernah menggunakannya",
      ],
      scores: [1, 2, 3, 4, 2.5],
    },
    {
      question:
        "Seberapa sering wajah dan/atau leher Anda menjadi merah setelah berolahraga ringan, dan/atau karena stres atau emosi yang kuat, seperti marah?",
      answers: ["Tidak pernah", "Kadang", "Sering", "Selalu"],
      scores: [1, 2, 3, 4],
    },
    {
      question:
        "Seberapa sering wajah Anda cenderung memerah dan memerah setelah minum alkohol?",
      answers: [
        "Tidak pernah",
        "Kadang",
        "Sering",
        "Selalu, atau saya tidak minum karena masalah ini",
        "Saya tidak pernah minum alkohol",
      ],
      scores: [1, 2, 3, 4, 2.5],
    },
    {
      question:
        "Seberapa sering Anda menjadi merah dan memerah setelah makan makanan atau minuman (bersuhu) pedas atau panas?",
      answers: [
        "Tidak pernah",
        "Kadang",
        "Sering",
        "Selalu, atau saya tidak makan/minum karena masalah ini",
        "Saya tidak pernah mengonsumsi makanan/minuman (bersuhu) pedas atau panas",
      ],
      scores: [1, 2, 3, 4, 2.5],
    },
    {
      question:
        "Berapa banyak pembuluh darah pecah berwarna merah atau biru yang Anda miliki (atau pernah Anda alami sebelum perawatan) di wajah dan hidung Anda?",
      answers: [
        "Tidak ada",
        "Sedikit (satu sampai tiga di seluruh wajah, termasuk hidung)",
        "Beberapa (empat sampai enam di seluruh wajah, termasuk hidung)",
        "Banyak (lebih dari tujuh di seluruh wajah, termasuk hidung)",
      ],
      scores: [1, 2, 3, 4],
    },
    {
      question: "Wajah anda terlihat memerah di dalam gambar",
      answers: [
        "Tidak pernah, atau saya tidak pernah menyadarinya",
        "Kadang",
        "Sering",
        "Selalu",
      ],
      scores: [1, 2, 3, 4],
    },
    {
      question:
        "Seseorang bertanya apakah wajah anda terbakar matahari(sunburned), bahkan ketika anda tidak merasakannya",
      answers: [
        "Tidak pernah",
        "Kadang",
        "Beberapa kali",
        "Sering",
        "Wajah saya selalu terbakar matahari (sunburned)",
      ],
      scores: [1, 2, 3, 4, 2.5],
    },
    {
      question:
        "Anda mengalami kemerahan, gatal, atau bengkak akibat riasan, tabir surya, atau produk perawatan kulit:",
      answers: [
        "Tidak pernah",
        "Kadang",
        "Beberapa kali",
        "Selalu",
        "Saya tidak menggunakan produk diatas",
      ],
      scores: [1, 2, 3, 4, 2.5],
    },
  ],
  section3: [
    {
      question:
        "Setelah Anda memiliki jerawat atau rambut tumbuh ke dalam, biasanya diikuti oleh bercak cokelat gelap/hitam",
      answers: [
        "Tidak pernah",
        "Kadang-kadang",
        "Sering",
        "Selalu",
        "Saya tidak pernah memiliki jerawat atau rambut tumbuh ke dalam",
      ],
      scores: [1, 2, 3, 4, 2.5],
    },
    {
      question:
        "Setelah Anda terluka, berapa lama tanda cokelat (bukan merah muda) atau bekas luka tetap ada?",
      answers: [
        "Saya tidak mendapatkan tanda cokelat",
        "Seminggu",
        "Beberapa minggu",
        "Beberapa bulan",
      ],
      scores: [1, 2, 3, 4],
    },
    {
      question:
        "Berapa banyak bintik gelap yang muncul di wajah Anda ketika Anda sedang hamil, mengonsumsi pil kontrasepsi, atau menjalani terapi penggantian hormon (HRT)",
      answers: [
        "Tidak ada",
        "Satu",
        "Beberapa",
        "Banyak",
        "Pertanyaan ini tidak berlaku bagi saya (karena saya laki-laki, atau karena saya tidak pernah hamil atau mengonsumsi pil kontrasepsi atau HRT, atau karena saya tidak yakin apakah saya memiliki bintik gelap)",
      ],
      scores: [1, 2, 3, 4, 0],
    },
    {
      question:
        "Apakah Anda memiliki bintik gelap atau bercak di atas bibir atas atau pipi? Atau pernahkah Anda memiliki yang sebelumnya sudah dihilangkan?",
      answers: [
        "Tidak",
        "Saya tidak yakin",
        "Ya, mereka (atau pernah) sedikit terlihat",
        "Ya, mereka (atau pernah) sangat terlihat",
      ],
      scores: [1, 2, 3, 4],
    },
    {
      question:
        "Apakah bintik-bintik gelap di wajah Anda memburuk ketika Anda berjemur di bawah sinar matahari?",
      answers: [
        "Saya tidak memiliki bintik gelap",
        "Tidak yakin",
        "Sedikit memburuk",
        "Jauh lebih buruk",
        "Saya menggunakan tabir surya di wajah setiap hari dan tidak pernah terpapar sinar matahari. (Catatan: jika Anda menggunakan perlindungan matahari terus-menerus karena Anda khawatir bisa mendapatkan bintik gelap atau tahi lalat, jawab(D)",
      ],
      scores: [1, 2, 3, 4, 2.5],
    },
    {
      question:
        "Apakah Anda pernah didiagnosis menderita melasma, yaitu bercak cokelat atau abu-abu terang pada wajah Anda?",
      answers: [
        "Tidak",
        "Pernah, tapi sudah hilang",
        "Ya",
        "Ya, dalam kasus yang parah",
        "Tidak yakin",
      ],
      scores: [1, 2, 3, 4, 2.5],
    },
    {
      question:
        "Apakah Anda memiliki atau pernah memiliki bintik-bintik cokelat kecil (tahi lalat atau bintik matahari) di wajah, dada, punggung, atau lengan?",
      answers: [
        "Tidak",
        "Ya, beberapa (1 hingga 5)",
        "Ya, banyak (6 hingga 15)",
        "Ya, sangat banyak (16 atau lebih)",
      ],
      scores: [1, 2, 3, 4],
    },
    {
      question:
        "Ketika terpapar sinar matahari untuk pertama kali dalam beberapa bulan, kulit",
      answers: [
        "Hanya terbakar",
        "Terbakar lalu menjadi lebih gelap",
        "Menjadi lebih gelap",
        "Kulit saya sudah gelap, jadi sulit untuk melihat apakah kulit saya menjadi lebih gelap. (Anda tidak bisa memilih 'Saya tidak pernah terpapar sinar matahari.' Ingat pengalaman masa kecil!)",
      ],
      scores: [1, 2, 3, 4],
    },
    {
      question:
        "Apa yang terjadi setelah Anda mengalami banyak hari terpapar sinar matahari secara berurutan?",
      answers: [
        "Saya terbakar matahari dan mengalami melepuh, tetapi warna kulit saya tidak berubah",
        "Kulit saya menjadi sedikit lebih gelap",
        "Kulit saya menjadi jauh lebih gelap",
        "Kulit saya sudah cukup gelap sehingga sulit untuk melihat apakah kulit saya menjadi lebih gelap",
        "Tidak yakin (Anda tidak bisa memilih 'Saya tidak pernah terpapar sinar matahari'. Jika Anda benar-benar harus memilih ini, pertimbangkan semua pengalaman masa kecil Anda terlebih dahulu)",
      ],
      scores: [1, 2, 3, 4, 2.5],
    },
    {
      question:
        "Ketika Anda berjemur di bawah sinar matahari, apakah Anda mengembangkan tahi lalat (bintik-bintik kecil berukuran 1-2mm)?",
      answers: [
        "Tidak, saya tidak pernah mengembangkan tahi lalat",
        "Saya mengembangkan beberapa tahi lalat kecil baru setiap tahun",
        "Saya sering mengembangkan tahi lalat baru",
        "Kulit saya sudah cukup gelap sehingga sulit untuk melihat apakah tahi lalat saya bertambah banyak",
        "Saya tidak pernah berjemur di bawah sinar matahari. (Bagus untuk Anda!)",
      ],
      scores: [1, 2, 3, 4, 2.5],
    },
    {
      question:
        "Apakah salah satu dari orang tua Anda memiliki tahi lalat? Jika ya, tolong tunjukkan berapa banyak. Jika tidak ada yang memiliki atau hanya salah satu orang tua yang memiliki, jawab pertanyaan ini berdasarkan orang tua yang memiliki tahi lalat paling banyak.",
      answers: [
        "Tidak",
        "Beberapa di wajah",
        "Banyak di wajah",
        "Banyak di wajah, dada, leher, dan bahu",
        "Tidak yakin",
      ],
      scores: [1, 2, 3, 4, 0],
    },
    {
      question:
        "Apa warna rambut alami Anda? (Jika beruban, sebutkan warna sebelum beruban)",
      answers: ["Pirang", "Cokelat", "Hitam", "Merah"],
      scores: [1, 2, 3, 4],
    },
    {
      question:
        "Apakah Anda atau keluarga dekat Anda memiliki riwayat melanoma?",
      answers: [
        "Tidak",
        "1 orang dalam keluarga saya",
        "Lebih dari 1 orang",
        "Saya memiliki riwayat melanoma",
        "Tidak yakin",
      ],
      scores: [1, 2, 3, 4, 0],
    },
  ],
  section4: [
    {
      question: "Apakah Anda memiliki kerutan di wajah?",
      answers: [
        "Tidak, bahkan dengan gerakan seperti tersenyum, mengerutkan kening, atau mengangkat alis",
        "Hanya ketika saya bergerak, seperti tersenyum, mengerutkan kening atau mengangkat alis",
        "Ya, dengan gerakan dan ada pula yang diam tanpa bergerak",
        "Kerutan tetap ada meskipun saya tidak tersenyum, mengerutkan kening, atau mengangkat alis",
      ],
      scores: [1, 2, 3, 4],
    },
    {
      question: "Berapa umur/tampilan kulit wajah ibu Anda?",
      answers: [
        "5 sampai 10 tahun lebih muda dari usianya",
        "Sesuai usianya",
        "5 tahun lebih tua dari usianya",
        "Lebih dari lima tahun lebih tua dari usianya",
        "Tidak berlaku: Saya diadopsi atau saya tidak dapat mengingatnya",
      ],
      scores: [1, 2, 3, 4, 2.5],
    },
    {
      question: "Berapa umur/tampilan kulit wajah ayah Anda?",
      answers: [
        "5 sampai 10 tahun lebih muda dari usianya",
        "Sesuai usianya",
        "5 tahun lebih tua dari usianya",
        "Lebih dari lima tahun lebih tua dari usianya",
        "Tidak berlaku: Saya diadopsi atau saya tidak dapat mengingatnya",
      ],
      scores: [1, 2, 3, 4, 2.5],
    },
    {
      question: "Berapa umur/tampilan kulit wajah nenek dari pihak ibu Anda?",
      answers: [
        "5 sampai 10 tahun lebih muda dari usianya",
        "Sesuai usianya",
        "5 tahun lebih tua dari usianya",
        "Lebih dari lima tahun lebih tua dari usianya",
        "Tidak berlaku: Saya diadopsi atau saya tidak dapat mengingatnya",
      ],
      scores: [1, 2, 3, 4, 2.5],
    },
    {
      question: "Berapa umur/tampilan kulit wajah kakek dari pihak ibu Anda?",
      answers: [
        "5 sampai 10 tahun lebih muda dari usianya",
        "Sesuai usianya",
        "5 tahun lebih tua dari usianya",
        "Lebih dari lima tahun lebih tua dari usianya",
        "Tidak berlaku: Saya diadopsi atau saya tidak dapat mengingatnya",
      ],
      scores: [1, 2, 3, 4, 2.5],
    },
    {
      question: "Berapa umur/tampilan kulit wajah nenek dari pihak ayah Anda?",
      answers: [
        "5 sampai 10 tahun lebih muda dari usianya",
        "Sesuai usianya",
        "5 tahun lebih tua dari usianya",
        "Lebih dari lima tahun lebih tua dari usianya",
        "Tidak berlaku: Saya diadopsi atau saya tidak dapat mengingatnya",
      ],
      scores: [1, 2, 3, 4, 2.5],
    },
    {
      question: "Berapa umur/tampilan kulit wajah kakek dari pihak ayah Anda?",
      answers: [
        "5 sampai 10 tahun lebih muda dari usianya",
        "Sesuai usianya",
        "5 tahun lebih tua dari usianya",
        "Lebih dari lima tahun lebih tua dari usianya",
        "Tidak berlaku: Saya diadopsi atau saya tidak dapat mengingatnya",
      ],
      scores: [1, 2, 3, 4, 2.5],
    },
    {
      question:
        "Kapan pun dalam hidup Anda, pernahkah Anda melakukan penyamakan kulit secara terus-menerus selama lebih dari dua minggu dalam setahun? Jika ya, selama berapa tahun terakhir Anda melakukan hal ini? Silakan hitung tanning mulai dari bermain tenis, memancing, bermain golf, ski, atau aktivitas luar ruangan lainnya. Pantai bukanlah satu-satunya tempat Anda bisa berjemur.",
      answers: [
        "Tidak pernah",
        "1 hingga 5 tahun",
        "5 hingga 10 tahun",
        "Lebih dari 10 tahun",
      ],
      scores: [1, 2, 3, 4],
    },
    {
      question:
        "Kapan pun dalam hidup Anda, pernahkah Anda melakukan penyamakan kulit musiman selama dua minggu per tahun atau kurang? (Ya, liburan musim panas itu penting!) Jika ya, seberapa sering?",
      answers: [
        "Tidak pernah",
        "1 hingga 5 tahun",
        "5 hingga 10 tahun",
        "Lebih dari 10 tahun",
      ],
      scores: [1, 2, 3, 4],
    },
    {
      question:
        "Berdasarkan tempat tinggal Anda, berapa banyak paparan sinar matahari harian yang Anda terima dalam hidup Anda?",
      answers: [
        "Sedikit; Saya kebanyakan tinggal di tempat yang kelabu dan mendung",
        "Kadang; Saya pernah tinggal di iklim yang tidak terlalu cerah, namun juga cuaca yang cerah",
        "Sedang; Saya pernah tinggal di tempat dengan paparan sinar matahari yang cukup banyak",
        "Sering; Saya sering tinggal di daerah tropis, utara, atau sangat cerah",
      ],
      scores: [1, 2, 3, 4],
    },
    {
      question: "Menurut Anda, berapa umur Anda?",
      answers: [
        "1 hingga 5 tahun lebih muda dari usia Anda",
        "Usia Anda",
        "5 tahun lebih tua dari usia Anda",
        "Lebih dari 5 tahun lebih muda dari usia Anda",
      ],
      scores: [1, 2, 3, 4],
    },
    {
      question:
        "Selama lima tahun terakhir, seberapa sering Anda membiarkan kulit Anda menjadi kecokelatan secara sengaja atau tidak sengaja melalui olahraga luar ruangan atau aktivitas lainnya?",
      answers: ["Tidak pernah", "Sebulan sekali", "Seminggu sekali", "Harian"],
      scores: [1, 2, 3, 4],
    },
    {
      question: "Seberapa sering, jika pernah, Anda mengunjungi tanning bed?",
      answers: [
        "Tidak pernah",
        "1 hingga 5 kali",
        "5 hingga 10 kali",
        "Sering",
      ],
      scores: [1, 2, 3, 4],
    },
    {
      question:
        "Sepanjang hidup Anda, berapa banyak rokok yang Anda hisap (atau pernah Anda konsumsi)?",
      answers: [
        "Tidak pernah",
        "Beberapa bungkus",
        "Beberapa hingga banyak paket",
        "Saya merokok tiap hari",
        "Saya tidak merokok, tapi tinggal di lingkungan dengan seseorang yang aktif merokok",
      ],
      scores: [1, 2, 3, 4, 2.5],
    },
    {
      question: "Tolong jelaskan polusi udara di tempat Anda tinggal",
      answers: [
        "Udara segar dan bersih",
        "Untuk sebagian tahun, tapi tidak sepanjang tahun, saya tinggal di tempat yang udaranya bersih.",
        "Udara sedikit tercemar.",
        "Udara sangat tercemar.",
      ],
      scores: [1, 2, 3, 4],
    },
    {
      question:
        "Tolong jelaskan berapa lama Anda menggunakan krim wajah retinoid seperti retinol, Renova, Retin-A, Tazorac, Differin atau Rata-rata",
      answers: [
        "Bertahun-tahun",
        "Kadang-kadang.",
        "Pernah berjerawat ketika saya masih muda. Tidak pernah",
        "Tidak pernah",
      ],
      scores: [1, 2, 3, 4],
    },
    {
      question: "Seberapa sering Anda saat ini makan buah dan sayur?",
      answers: [
        "Setiap kali makan",
        "Sehari sekali",
        "Kadang-kadang",
        "Tidak pernah",
      ],
      scores: [1, 2, 3, 4],
    },
    {
      question:
        "Sepanjang hidup Anda, berapa persentase makanan harian Anda yang terdiri dari buah-buahan dan sayur-sayuran? (Note: jangan menghitung jus kecuali jus segar.)",
      answers: ["75-100%", "25-75%", "10-25%", "0-25%"],
      scores: [1, 2, 3, 4],
    },
    {
      question: "Apa warna kulit alami Anda (tanpa tanning atau self-tanners)?",
      answers: ["Gelap", "Medium", "Cerah", "Sangat cerah"],
      scores: [1, 2, 3, 4],
    },
    {
      question: "Apa etnismu? (Silakan pilih jawaban terbaik)",
      answers: [
        "Afrika-Amerika/Karibia/Kulit Hitam",
        "Asia/India/Mediterania/Lainnya",
        "Amerika Latin/Hispanik",
        "Kaukasia",
      ],
      scores: [1, 2, 3, 4],
    },
  ],
};

export default questions;
