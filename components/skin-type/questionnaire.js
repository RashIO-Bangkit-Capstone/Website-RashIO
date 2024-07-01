import React from "react";

const questionnaire = {
  section1: [
    {
      question1:
        "Setelah mencuci wajah Anda, jangan mengoleskan pelembap, tabir surya, toner, bedak, atau produk lainnya. Dua hingga tiga jam kemudian, lihatlah di cermin di bawah cahaya terang. Dahi dan pipi Anda terasa atau terlihat.",
      answers1: [
        "Sangat kasar, bersisik, atau abu-abu",
        "Ketat",
        "Terhidrasi dengan baik tanpa pantulan cahaya",
        "Berkilau dengan pantulan cahaya terang",
      ],
      scores1: [1, 2, 3, 4],
    },
    {
      question2: "Dalam foto, wajah Anda terlihat berkilau.",
      answers2: [
        "Tidak pernah, atau Anda tidak pernah memperhatikan kilauan",
        "Kadang-kadang",
        "Sering",
        "Selalu",
      ],
      scores2: [1, 2, 3, 4],
    },
    {
      question3:
        "Dua hingga tiga jam setelah mengoleskan dasar makeup (juga dikenal sebagai foundation), tetapi tanpa bedak, makeup Anda terlihat.",
      answers3: [
        "Bersisik atau terkumpul di kerutan",
        "Halus",
        "Berkilau",
        "Bergaris dan berkilau",
        "Saya tidak mengenakan dasar wajah (foundation)",
      ],
      scores3: [1, 2, 3, 4, 2.5],
    },
    {
      question4:
        "Ketika berada dalam lingkungan dengan kelembaban rendah, jika Anda tidak menggunakan pelembap atau tabir surya, kulit wajah Anda dapat menjadi",
      answers4: [
        "Terasa sangat kering atau retak",
        "Terasa kencang",
        "Terasa normal",
        "Terlihat berkilau, atau saya tidak pernah merasa perlu menggunakan pelembap",
        "Tidak tahu",
      ],
      scores4: [1, 2, 3, 4, 2.5],
    },
    {
      question5:
        "Lihatlah di cermin pembesar. Berapa banyak pori besar, seukuran ujung jarum atau lebih besar, yang Anda miliki?",
      answers5: [
        "Tidak ada",
        "Beberapa di zona T (dahi dan hidung) saja",
        "Banyak",
        "Banyak sekali!",
        "Tidak tahu",
      ],
      scores5: [1, 2, 3, 4, 2.5],
    },
    {
      question6: "Anda akan menggambarkan kulit wajah Anda sebagai:",
      answers6: ["Kering", "Normal", "Kombinasi", "Berminyak"],
      scores6: [1, 2, 3, 4],
    },
    {
      question7:
        "Ketika Anda menggunakan sabun yang menghasilkan busa dan berbusa dengan kuat, kulit wajah Anda",
      answers7: [
        "Terasa kering atau retak",
        "Terasa sedikit kering tetapi tidak retak",
        "Terasa normal",
        "Terasa berminyak",
        "Saya tidak menggunakan sabun atau pembersih berbusa lainnya",
      ],
      scores7: [1, 2, 3, 4, 2.5],
    },
    {
      question8: "Jika tidak diberi pelembap, kulit wajah Anda terasa kencang",
      answers8: ["Selalu", "Kadang-kadang", "Jarang", "Tidak pernah"],
      scores8: [1, 2, 3, 4],
    },
    {
      question9:
        "Anda memiliki pori-pori yang tersumbat (komedo hitam atau putih)",
      answers9: ["Tidak pernah", "Jarang", "Kadang-kadang", "Selalu"],
      scores9: [1, 2, 3, 4],
    },
    {
      question10: "Wajah Anda berminyak di zona T (dahi dan hidung)",
      answers10: ["Tidak pernah", "Kadang-kadang", "Sering", "Selalu"],
      scores10: [1, 2, 3, 4],
    },
    {
      question11: "Dua hingga tiga jam setelah mengoleskan pelembap, pipi Anda",
      answers11: [
        "Sangat kasar, bersisik, atau abu-abu",
        "Halus",
        "Sedikit berkilau",
        "Berkilau dan licin, atau saya tidak menggunakan pelembap",
      ],
      scores11: [1, 2, 3, 4],
    },
  ],
  section2: [
    {
      question1: "Anda mendapatkan benjolan merah di wajah anda",
      answers1: ["Tidak Pernah", "Jarang", "Sebulan sekali", "Seminggu sekali"],
      scores1: [1, 2, 3, 4],
    },
    {
      question2:
        "Produk perawatan kulit (termasuk pembersih, pelembab, toner, dan riasan) menyebabkan wajah Anda berjerawat, mengalami ruam, gatal, atau perih:",
      answers2: [
        "Tidak Pernah",
        "Jarang",
        "Sering",
        "Selalu",
        "Tidak pernah menggunakan produk perawatan kulit",
      ],
      scores2: [1, 2, 3, 4, 2.5],
    },
    {
      question3: "Pernahkah Anda didiagnosis menderita jerawat atau rosacea?",
      answers3: [
        "Tidak",
        "Kenalan saya mengatakan saya mempunyainya",
        "Iya",
        "Iya, kasus yang parah",
        "Tidak yakin",
      ],
      scores3: [1, 2, 3, 4, 2.5],
    },
    {
      question4:
        "Jika anda menggunakan perhiasan yang bukan emas, seberapa sering anda mendapatkan ruam?",
      answers4: ["Tidak pernah", "Jarang", "Sering", "Selalu", "Tidak yakin"],
      scores4: [1, 2, 3, 4, 0],
    },
    {
      question5:
        "Sunscreen membuat kulit Anda gatal, terbakar, breakout atau memerah",
      answers5: [
        "Tidak pernah",
        "Jarang",
        "Sering",
        "Selalu",
        "Tidak pernah menggunakan sunscreen",
      ],
      scores5: [1, 2, 3, 4, 2.5],
    },
    {
      question6:
        "Pernahkah Anda didiagnosis menderita dermatitis atopik, eksim, atau dermatitis kontak (ruam kulit analergi)?",
      answers6: [
        "Tidak",
        "Teman pernah mengatakan saya menderitanya",
        "Iya",
        "Iya, dalam kasus yang parah",
        "Tidak yakin",
      ],
      scores6: [1, 2, 3, 4, 2.5],
    },
    {
      question7: "Seberapa sering Anda mengalami ruam di bawah cincin Anda?",
      answers7: [
        "Tidak pernah",
        "Jarang",
        "Sering",
        "Selalu",
        "Saya tidak menggunakan cincin",
      ],
      scores7: [1, 2, 3, 4, 2.5],
    },
    {
      question8:
        "Mandi busa beraroma, minyak pijat, atau losion tubuh membuat kulit Anda berjerawat, gatal, atau terasa kering",
      answers8: [
        "Tidak pernah",
        "Jarang",
        "Sering",
        "Selalu",
        "Saya tidak menggunakan produk diatas",
      ],
      scores8: [1, 2, 3, 4, 2.5],
    },
    {
      question9:
        "Bisakah anda menggunakan sabun yang disediakan di hotel di tubuh atau wajah anda tanpa masalah?",
      answers9: [
        "Iya",
        "Sering, dan saya tidak memilih masalah",
        "Tidak, kulit saya menjadi gatal, memerah atau breaks out",
        "Saya tidak menggunakannya, saya sudah memiliki banyak masalah sebelumnya",
        "Saya membawa miliki saya pribadi, jadi saya tidak yakin",
      ],
      scores9: [1, 2, 3, 4, 2.5],
    },
    {
      question10:
        "Adakah seseorang di keluarga anda yang di diagnosa menderita dermatitis atopik, eksim, atau dermatitis kontak (ruam kulit analergi)?",
      answers10: [
        "Tidak",
        "Seorang anggota keluarga yang saya kenal",
        "Beberapa anggota keluarga",
        "Banyak dari keluarga saya menderita dermatitis atopik, eksim, atau dermatitis kontak (ruam kulit analergi)",
        "Tidak yakin",
      ],
      scores10: [1, 2, 3, 4, 2.5],
    },
    {
      question11:
        "Apa yang terjadi jika Anda menggunakan deterjen beraroma atau pelicin pakaian di pengering?",
      answers11: [
        "Kulitku baik-baik saja",
        "Kulitku terasa sedikit kering",
        "Kulitku menjadi gatal",
        "Kulitku menjadi gatal dan memiliki ruam",
        "Tidak yakin, saya tidak pernah menggunakannya",
      ],
      scores11: [1, 2, 3, 4, 2.5],
    },
    {
      question12:
        "Seberapa sering wajah dan/atau leher Anda menjadi merah setelah berolahraga ringan, dan/atau karena stres atau emosi yang kuat, seperti marah?",
      answers12: ["Tidak pernah", "Kadang", "Sering", "Selalu"],
      scores12: [1, 2, 3, 4],
    },
    {
      question13:
        "Seberapa sering wajah Anda cenderung memerah dan memerah setelah minum alkohol?",
      answers13: [
        "Tidak pernah",
        "Kadang",
        "Sering",
        "Selalu, atau saya tidak minum karena masalah ini",
        "Saya tidak pernah minum alkohol",
      ],
      scores13: [1, 2, 3, 4, 2.5],
    },
    {
      question14:
        "Seberapa sering Anda menjadi merah dan memerah setelah makan makanan atau minuman (bersuhu) pedas atau panas?",
      answers14: [
        "Tidak pernah",
        "Kadang",
        "Sering",
        "Selalu, atau saya tidak makan/minum karena masalah ini",
        "Saya tidak pernah mengonsumsi makanan/minuman (bersuhu) pedas atau panas",
      ],
      scores14: [1, 2, 3, 4, 2.5],
    },
    {
      question15:
        "Berapa banyak pembuluh darah pecah berwarna merah atau biru yang Anda miliki (atau pernah Anda alami sebelum perawatan) di wajah dan hidung Anda?",
      answers15: [
        "Tidak ada",
        "Sedikit (satu sampai tiga di seluruh wajah, termasuk hidung)",
        "Beberapa (empat sampai enam di seluruh wajah, termasuk hidung)",
        "Banyak (lebih dari tujuh di seluruh wajah, termasuk hidung)",
      ],
      scores15: [1, 2, 3, 4],
    },
    {
      question16: "Wajah anda terlihat memerah di dalam gambar",
      answers16: [
        "Tidak pernah, atau saya tidak pernah menyadarinya",
        "Kadang",
        "Sering",
        "Selalu",
      ],
      scores16: [1, 2, 3, 4],
    },
    {
      question17:
        "Seseorang bertanya apakah wajah anda terbakar matahari(sunburned), bahkan ketika anda tidak merasakannya",
      answers17: [
        "Tidak pernah",
        "Kadang",
        "Beberapa kali",
        "Sering",
        "Wajah saya selalu terbakar matahari (sunburned)",
      ],
      scores17: [1, 2, 3, 4, 2.5],
    },
    {
      question18:
        "Anda mengalami kemerahan, gatal, atau bengkak akibat riasan, tabir surya, atau produk perawatan kulit:",
      answers18: [
        "Tidak pernah",
        "Kadang",
        "Beberapa kali",
        "Selalu",
        "Saya tidak menggunakan produk diatas",
      ],
      scores18: [1, 2, 3, 4, 2.5],
    },
  ],
  section3: [
    {
      question1:
        "Setelah Anda memiliki jerawat atau rambut tumbuh ke dalam, biasanya diikuti oleh bercak cokelat gelap/hitam",
      answers1: [
        "Tidak pernah",
        "Kadang-kadang",
        "Sering",
        "Selalu",
        "Saya tidak pernah memiliki jerawat atau rambut tumbuh ke dalam",
      ],
      scores1: [1, 2, 3, 4, 2.5],
    },
    {
      question2:
        "Setelah Anda terluka, berapa lama tanda cokelat (bukan merah muda) atau bekas luka tetap ada?",
      answers2: [
        "Saya tidak mendapatkan tanda cokelat",
        "Seminggu",
        "Beberapa minggu",
        "Beberapa bulan",
      ],
      scores2: [1, 2, 3, 4],
    },
    {
      question3:
        "Berapa banyak bintik gelap yang muncul di wajah Anda ketika Anda sedang hamil, mengonsumsi pil kontrasepsi, atau menjalani terapi penggantian hormon (HRT)",
      answers3: [
        "Tidak ada",
        "Satu",
        "Beberapa",
        "Banyak",
        "Pertanyaan ini tidak berlaku bagi saya (karena saya laki-laki, atau karena saya tidak pernah hamil atau mengonsumsi pil kontrasepsi atau HRT, atau karena saya tidak yakin apakah saya memiliki bintik gelap)",
      ],
      scores3: [1, 2, 3, 4, 0],
    },
    {
      question4:
        "Apakah Anda memiliki bintik gelap atau bercak di atas bibir atas atau pipi? Atau pernahkah Anda memiliki yang sebelumnya sudah dihilangkan?",
      answers4: [
        "Tidak",
        "Saya tidak yakin",
        "Ya, mereka (atau pernah) sedikit terlihat",
        "Ya, mereka (atau pernah) sangat terlihat",
      ],
      scores4: [1, 2, 3, 4],
    },
    {
      question5:
        "Apakah bintik-bintik gelap di wajah Anda memburuk ketika Anda berjemur di bawah sinar matahari?",
      answers5: [
        "Saya tidak memiliki bintik gelap",
        "Tidak yakin",
        "Sedikit memburuk",
        "Jauh lebih buruk",
        "Saya menggunakan tabir surya di wajah setiap hari dan tidak pernah terpapar sinar matahari. (Catatan: jika Anda menggunakan perlindungan matahari terus-menerus karena Anda khawatir bisa mendapatkan bintik gelap atau tahi lalat, jawab(D)",
      ],
      scores5: [1, 2, 3, 4, 2.5],
    },
    {
      question6:
        "Apakah Anda pernah didiagnosis menderita melasma, yaitu bercak cokelat atau abu-abu terang pada wajah Anda?",
      answers6: [
        "Tidak",
        "Pernah, tapi sudah hilang",
        "Ya",
        "Ya, dalam kasus yang parah",
        "Tidak yakin",
      ],
      scores6: [1, 2, 3, 4, 2.5],
    },
    {
      question7:
        "Apakah Anda memiliki atau pernah memiliki bintik-bintik cokelat kecil (tahi lalat atau bintik matahari) di wajah, dada, punggung, atau lengan?",
      answers7: [
        "Tidak",
        "Ya, beberapa (1 hingga 5)",
        "Ya, banyak (6 hingga 15)",
        "Ya, sangat banyak (16 atau lebih)",
      ],
      scores7: [1, 2, 3, 4],
    },
    {
      question8:
        "Ketika terpapar sinar matahari untuk pertama kali dalam beberapa bulan, kulit",
      answers8: [
        "Hanya terbakar",
        "Terbakar lalu menjadi lebih gelap",
        "Menjadi lebih gelap",
        "Kulit saya sudah gelap, jadi sulit untuk melihat apakah kulit saya menjadi lebih gelap. (Anda tidak bisa memilih 'Saya tidak pernah terpapar sinar matahari.' Ingat pengalaman masa kecil!)",
      ],
      scores8: [1, 2, 3, 4],
    },
    {
      question9:
        "Apa yang terjadi setelah Anda mengalami banyak hari terpapar sinar matahari secara berurutan?",
      answers9: [
        "Saya terbakar matahari dan mengalami melepuh, tetapi warna kulit saya tidak berubah",
        "Kulit saya menjadi sedikit lebih gelap",
        "Kulit saya menjadi jauh lebih gelap",
        "Kulit saya sudah cukup gelap sehingga sulit untuk melihat apakah kulit saya menjadi lebih gelap",
        "Tidak yakin (Anda tidak bisa memilih 'Saya tidak pernah terpapar sinar matahari'. Jika Anda benar-benar harus memilih ini, pertimbangkan semua pengalaman masa kecil Anda terlebih dahulu)",
      ],
      scores9: [1, 2, 3, 4, 2.5],
    },
    {
      question10:
        "Ketika Anda berjemur di bawah sinar matahari, apakah Anda mengembangkan tahi lalat (bintik-bintik kecil berukuran 1-2mm)?",
      answers10: [
        "Tidak, saya tidak pernah mengembangkan tahi lalat",
        "Saya mengembangkan beberapa tahi lalat kecil baru setiap tahun",
        "Saya sering mengembangkan tahi lalat baru",
        "Kulit saya sudah cukup gelap sehingga sulit untuk melihat apakah tahi lalat saya bertambah banyak",
        "Saya tidak pernah berjemur di bawah sinar matahari. (Bagus untuk Anda!)",
      ],
      scores10: [1, 2, 3, 4, 2.5],
    },
    {
      question11:
        "Apakah salah satu dari orang tua Anda memiliki tahi lalat? Jika ya, tolong tunjukkan berapa banyak. Jika tidak ada yang memiliki atau hanya salah satu orang tua yang memiliki, jawab pertanyaan ini berdasarkan orang tua yang memiliki tahi lalat paling banyak.",
      answers11: [
        "Tidak",
        "Beberapa di wajah",
        "Banyak di wajah",
        "Banyak di wajah, dada, leher, dan bahu",
        "Tidak yakin",
      ],
      scores11: [1, 2, 3, 4, 0],
    },
    {
      question12:
        "Apa warna rambut alami Anda? (Jika beruban, sebutkan warna sebelum beruban)",
      answers12: ["Pirang", "Cokelat", "Hitam", "Merah"],
      scores12: [1, 2, 3, 4],
    },
    {
      question13:
        "Apakah Anda atau keluarga dekat Anda memiliki riwayat melanoma?",
      answers13: [
        "Tidak",
        "1 orang dalam keluarga saya",
        "Lebih dari 1 orang",
        "Saya memiliki riwayat melanoma",
        "Tidak yakin",
      ],
      scores13: [1, 2, 3, 4, 0],
    },
  ],
};

export default questionnaire;
