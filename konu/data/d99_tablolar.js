// Karşılaştırma tabloları: ilgili dersin ilgili konu bloğunun başına, "Özet tablo" bölümü olarak eklenir.
(function(){
function add(dersId, blokParca, baslik, tablolar){
  const d=KONU.find(k=>k.id===dersId); if(!d){console.warn('ders yok',dersId);return;}
  const b=[...d.konular,...(d.ekstra||[])].find(x=>x.b.includes(blokParca));
  if(!b){console.warn('blok yok',dersId,blokParca);return;}
  b.bolumler.unshift([baslik,tablolar]);
}

add('lezyon','Temel kavramlar','Özet tablo',[{cap:'Temel kavramlar: ÜMN – ALMN',star:true,h:['Bulgu','Üst motor nöron','Alt motor nöron'],r:[
 ['Derin tendon refleksi','Artar (geç)','Azalır / kaybolur'],['Tonus','Artar (spastik; akutta azalmış)','Azalır (flask)'],['Babinski','Var (hemen)','Yok'],
 ['Klonus','Olabilir','Yok'],['Fasikülasyon','Olmaz','Görülebilir'],['Atrofi','Geç','Erken'],['Yüzeyel refleks','İlk günden kaybolur','Kaybolabilir']]}]);

add('lezyon','Lokalizasyon özeti','Özet tablo',[{cap:'Lezyon yeri – klinik bulgu',star:true,h:['Lezyon','Tipik bulgu'],r:[
 ['MCA alanı (dominant)','Kontralateral orantısız hemiparezi (yüz-kol>bacak), hemihipoestezi, afazi, hemianopsi'],
 ['İnternal kapsül','Orantılı hemipleji ± hemihipoestezi'],['Pons (fasiyal çekirdek + kortikospinal)','Aynı tarafta periferik fasiyal paralizi + karşı hemipleji'],
 ['Çapraz beyin sapı sendromu','Aynı tarafta kranyal sinir felci + karşı hemiparezi'],['Torakal omurilik','Paraparezi, ÜMN bulguları, seviye veren duyu kaybı'],
 ['Kök (C5-C6)','Dermatomal duyu kaybı, biseps ve stiloradyal refleks azalması'],['Hemiseksiyon (Brown-Séquard)','Aynı tarafta motor + derin duyu kaybı, karşı tarafta ağrı-ısı kaybı']]}]);

add('koma','Glasgow','Özet tablo',[{cap:'Glasgow Koma Skalası',star:true,h:['Puan','Göz açma','Motor yanıt','Sözel yanıt'],r:[
 ['6','—','Emre uyar','—'],['5','—','Ağrıyı lokalize eder','Oryante'],['4','Spontan','Fleksör yanıt (kaçınma)','Konfüze / dezoryante'],
 ['3','Sese','Dekortike (anormal fleksiyon)','Uygunsuz kelimeler'],['2','Ağrıya','Deserebre (ekstansiyon)','Anlaşılmaz sesler'],['1','Açmıyor','Yanıt yok','Yanıt yok']]},
 {cap:'Sınıflama: 13-15 hafif · 9-12 orta · ≤8 ağır (koma). En düşük 3, en yüksek 15.',h:['Bilinç düzeyi','Özellik'],r:[
 ['Bilinç açık','Uyanık ve farkında'],['Letarji / somnolans','Sesle çabuk uyanır, farkındalık var'],['Stupor','Zorlukla uyanır, farkındalık azalmış (ağrıyla inilti)'],['Koma','Uyandırılamaz, farkında değil']]}]);

add('koma','Komada solunum','Özet tablo',[{cap:'Komada solunum paternleri ve lezyon yeri',star:true,h:['Patern','Lezyon / neden'],r:[
 ['Cheyne-Stokes','Bilateral diffüz serebral, metabolik, bihemisferik'],['Santral nörojenik hiperventilasyon','Mezensefalon (üst pons – alt mezensefalon)'],
 ['Apnöstik','Üst / orta pons'],['Küme','Alt pons'],['Ataksik','Bulbus (kötü prognoz)']]}]);

add('koma','Beyin sapı refleksleri','Özet tablo',[{cap:'Pupilla bulguları',h:['Tablo','Pupilla'],r:[
 ['Metabolik ensefalopati, diensefalik','Küçük, reaktif'],['Pons kanaması, morfin / eroin','Pinpoint, ışık refleksi korunmuş'],['Unkal herniasyon (III. sinir)','Dilate, fikse (tek taraflı)'],
 ['Mezensefalik / ağır mezensefalon hasarı','Orta büyüklükte ya da dilate, fikse'],['Atropin, barbitürat, hipoksi, hipotermi','Işık refleksi azalmış / kayıp']]}]);

add('sss_enf','Akut bakteriyel menenjit','Özet tablo',[{cap:'BOS bulguları',star:true,h:['','Normal','Bakteriyel','Kısmen tedavi edilmiş','Viral','TBC'],r:[
 ['Görünüm','Berrak','Bulanık','Berrak / bulanık','Berrak','Berrak / bulanık'],['Basınç','N','↑','N / ↑','↑','N / ↑'],['Lökosit /mm3','<5','>1000','100-1000','N / 10-100','100-1000'],
 ['Hücre tipi','Lenfosit','Nötrofil','Nötrofil (%80)','Lenfosit','Lenfosit'],['Glukoz (mg/dl)','>40','<40','<40','N / ↓','<40'],['BOS/serum glukoz','>0,6','<0,4','<0,4','N / <0,4','<0,4'],
 ['Protein (mg/dl)','<40','100-500','60-100','N / 100↑','100-500'],['Gram boyama (+)','—','%75-90','%55-70','—','—'],['Kültür (+)','—','%70-85','<%80','—','—']]},
 {cap:'Ampirik antibiyotik',h:['Hasta grubu','Penisilin duyarlılığı normal pnömokok','Duyarlılığı azalmış pnömokok'],r:[
 ['18-50 yaş','Sefotaksim veya seftriakson','Sefotaksim / seftriakson + vankomisin veya penisilin'],
 ['>50 yaş veya Listeria risk faktörü','Sefotaksim / seftriakson + amoksisilin / ampisilin / penisilin','Sefotaksim / seftriakson + vankomisin veya penisilin + amoksisilin / ampisilin / penisilin']]}]);

add('sss_enf','Herpes simpleks','Özet tablo',[{cap:'Ensefalit – menenjit karşılaştırması',h:['','HSV ensefaliti','Bakteriyel menenjit'],r:[
 ['Klinik','Ateş, davranış değişikliği, nöbet, fokal bulgu; ense sertliği yok olabilir','Ateş, baş ağrısı, ense sertliği, Kernig / Brudzinski, bilinç değişikliği'],
 ['BOS','Lenfosit 10-500, protein >50, glukoz normal','Nötrofil >1000, protein 100-500, glukoz <40'],['Tanı','PCR (HSV), MRG: temporal / frontal alt kısım','Gram, kültür, kan kültürü, PCR'],
 ['Tedavi','IV asiklovir 10 mg/kg ×3 (≤6 saatte), 14-21 gün','Antibiyotik ≤1 saat + deksametazon (4 gün)']]}]);

add('bayilma','Senkop ve epileptik','Özet tablo',[{cap:'Refleks senkop – epileptik nöbet',star:true,h:['Özellik','Nörojenik senkop','Epileptik nöbet'],r:[
 ['Tetikleyici','Sık (ayakta durma, stres)','Nadir'],['Prodrom','Devamlı','Sık (aura)'],['Ortaya çıkış','Dakikalar içinde','Genelde ani'],['Süre','1-30 sn','1-3 dk'],
 ['Konvülzif kasılma','Kısa süreli','Daha uzun'],['İnkontinans','Nadir','Sık'],['Dil kenarı ısırma','Çok nadir','Sık'],['Renk','Soluk','Tonik-klonikte mor'],
 ['Postiktal konfüzyon','Nadir','Sık'],['Düzelme','Hızlı','Yavaş'],['EEG (bilinç kapalıyken)','Epileptik deşarj yok','Var']]}]);

add('bayilma','Psikojen','Özet tablo',[{cap:'Epileptik nöbet – psikojen nöbet',star:true,h:['Özellik','Epileptik','Psikojen'],r:[
 ['Süre','1-2 dk','Uzun'],['Gözler','Sıklıkla açık','Kapalı'],['Göz açmaya direnç','Yok','Var'],['Ortam','Yalnızken de olur','Çevrede insan vardır'],['Dil ısırma','Sık','Çok seyrek'],
 ['Yaralanma','Sık','—'],['İnkontinans','Sık','Olabilir (%10-25)'],['Postiktal','Konfüzyon','Yorgunluk (<30 sn konfüzyon olabilir)'],['Renk','Mor','Soluk'],['Prodrom / aura','Sık','—'],['Tetikleyici','Nadir','Sık'],['Babinski','+','−']]}]);

add('bayilma','Epilepsi tedavisi','Özet tablo',[{cap:'Nöbet önleyici ilaçlar ve nöbet tipi',star:true,h:['Grup','İlaçlar','Not'],r:[
 ['Geniş spektrumlu (fokal + jeneralize)','Valproat, levetirasetam, lamotrijin, topiramat, zonisamid','Valproat doğurganlıkta teratojen'],
 ['Fokal nöbet','Karbamazepin, okskarbazepin, fenitoin','Miyoklonik nöbeti artırabilir'],['Yalnız absans','Etosüksimid',''],
 ['Etkileşimi az','Gabapentin, pregabalin, levetirasetam','Çoklu ilaç kullananlarda'],['Gebelikte tercih','Levetirasetam, lamotrijin','Folik asit']]},
 {cap:'Doz / hedef düzey (kitap)',h:['İlaç','Günlük doz (mg)','Hedef düzey (mg/L)'],r:[
 ['Karbamazepin','600-800','4-10'],['Fenitoin','100-400','10-20'],['Valproat','500-3000','50-100'],['Etosüksimid','500-1000','40-100']]}]);

add('bayilma','Status epileptikus','Özet tablo',[{cap:'Status epileptikus tedavi basamakları',star:true,h:['Basamak','İlaç ve doz','Dikkat'],r:[
 ['1. Benzodiazepin','IV diazepam 10 mg (maks 20 mg) · IM midazolam 10 mg · IV lorazepam maks 4 mg (0,1 mg/kg)','Hızlı bolus solunum depresyonu'],
 ['2. Antiepileptik yükleme','Fenitoin 20 mg/kg (maks 1500) · Valproat 40 mg/kg (maks 3000) · Levetirasetam 60 mg/kg (maks 4500)','Fenitoin dekstrozla sulandırılmaz, kardiyak monitör'],
 ['3. Genel anestezi','EEG monitörizasyonu altında','Yanıt yoksa']]}]);

add('basagrisi','Gerilim tipi','Özet tablo',[{cap:'Baş ağrısı tipleri: kısa karşılaştırma',star:true,h:['','Gerilim tipi','Migren','Küme'],r:[
 ['Yer','Bilateral, bantlı','Tek taraflı (%80)','Tek taraflı orbital / temporal'],['Karakter','Künt, basınç','Zonklayıcı','Çok şiddetli, delici'],['Süre','30 dk-7 gün','4-72 saat','15-180 dk'],
 ['Şiddet','Hafif-orta','Orta-şiddetli','Çok şiddetli'],['Aktivite','Artmaz','Artar','Huzursuzluk'],['Eşlik','Bulantı yok','Bulantı, foto-fonofobi, aura','Otonomik belirti (yaşarma, rinore, ptoz)'],
 ['Atak tedavisi','Basit analjezik / NSAİ','NSAİ, triptan, ergotamin','SC sumatriptan, %100 oksijen'],['Proflaksi','Amitriptilin','Propranolol, topiramat, valproat, amitriptilin, flunarizin','Verapamil, lityum (kronik); steroid (epizodik)']]}]);

add('basagrisi','Migren','Özet tablo',[{cap:'Triptanlar',star:true,h:['İlaç','Doz / form','Yarı ömür (saat)'],r:[
 ['Sumatriptan','50-100 mg oral, 6 mg SC, nazal','2'],['Rizatriptan','10 mg','2-3'],['Zolmitriptan','2,5 mg (oral, nazal)','3'],['Eletriptan','40 mg','5'],['Naratriptan','2,5 mg','6'],['Frovatriptan','2,5 mg','25']]},
 {cap:'Migren profilaksisi: ilaç – kontrendikasyon – endikasyon',star:true,h:['İlaç','Kontrendikasyon','Endikasyon'],r:[
 ['Beta bloker','Astım, depresyon, KKY, Raynaud, DM, bradikardi','HT, anjina'],['Amitriptilin / TCA','Mani, idrar retansiyonu, kalp bloğu, glokom','Depresyon, anksiyete, insomni, ağrı'],
 ['Valproat','KC hastalığı, kanamalar, gebelik','Epilepsi, duygudurum bozukluğu'],['Topiramat','Böbrek taşı','Epilepsi, duygudurum bozukluğu'],['Flunarizin','Obezite, depresyon','HT, familyal hemiplejik migren'],['SSRI / SNRI','Mani','Depresyon, OKB']]}]);

add('kuvvet','Kuvvetsizliğe yaklaşım','Özet tablo',[{cap:'MRC kas gücü',star:true,h:['Derece','Anlamı'],r:[['0','Hiç hareket yok'],['1','Kasılma var, hareket yok'],['2','Yerçekimini yenemiyor'],['3','Yerçekimini yeniyor, direnemiyor'],['4','Direniyor, yenemiyor'],['5','Muayene edenle eşit direnç']]},
 {cap:'Kuvvetsizlik dağılımı',h:['Terim','Dağılım'],r:[['Tetra','Dört ekstremite'],['Hemi','Vücudun yarısı'],['Para','İki bacak'],['Mono','Tek ekstremite']]}]);

add('kuvvet','Multipl skleroz','Özet tablo',[{cap:'MS seyir türleri',h:['Tür','Özellik','Sıklık'],r:[
 ['Ataklı (RRMS)','Atak + remisyon; atak ≥24 saat','~%85'],['Sekonder progresif (SPMS)','Ataklı başlar, sonra ilerleyici','—'],['Primer progresif (PPMS)','Başından ilerleyici özürlülük','~%10'],['Progresif relapsing','İlerleyici + üstüne ataklar','nadir']]},
 {cap:'MS – GBS – MG – ALS',star:true,h:['','GBS','MS / transvers miyelit','MG','ALS'],r:[
 ['Seyir','Akut, 4 haftada zirve','Atak-remisyon','Dalgalı, yorulmayla artar','Yavaş ilerleyici'],['Refleks','Yaygın arefleksi','Artmış','Normal','ÜMN + ALMN'],['Duyu','Yok / hafif','Seviye veren kayıp','Yok','Yok'],
 ['Tanı','BOS: protein↑ hücre normal; EMG','MRG, oligoklonal bant','Yorma / buz testi, dekrement, anti-AChR','EMG'],['Tedavi','IVIg veya plazmaferez','Metilprednizolon 1 g/gün','Piridostigmin, immünsüpresif, timektomi','Riluzol, destek']]}]);

add('hareket','Parkinsonizm (Parkinson sendromu)','Özet tablo',[{cap:'Parkinsonizm tanı puanlaması (en az 3 puan)',star:true,h:['Bulgu','Puan'],r:[['Bradikinezi','2'],['İstirahat tremoru','2'],['Rijidite','1'],['Fleksiyon postürü','1'],['Postural bozukluk (çekme testi)','1'],['Donma','1']]}]);

add('hareket','Parkinson hastalığı (PH)','Özet tablo',[{cap:'PH – diğer parkinsonizmler',star:true,h:['','Parkinson hastalığı','Diğer parkinsonizm'],r:[
 ['Simetri','Asimetrik','Simetrik'],['İstirahat tremoru','Sık','Seyrek'],['Levodopa yanıtı','Var (~%40 düzelme)','Yok / yetersiz'],['Rijidite','Distalde belirgin','Proksimalde belirgin']]},
 {cap:'Parkinson ilaçları',star:true,h:['Grup','İlaçlar','Olumsuz yan'],r:[
 ['Levodopa (altın standart)','+ karbidopa / benserazid; ± entakapon','Diskinezi, doz sonu kötüleşmesi'],['MAO-B inhibitörü','Selejilin 5 mg, rasajilin 1 mg','Antidepresanla serotonin sendromu'],
 ['Dopamin agonisti','Pramipeksol, ropinirol, piribedil, apomorfin SC','Dürtü kontrol bozukluğu'],['COMT inhibitörü','Entakapon, tolkapon','Tolkapon KC toksisitesi'],['NMDA antagonisti','Amantadin','Tepe dozu diskinezisi tedavisi'],['Antikolinerjik','Biperiden','Deliryum, idrar retansiyonu']]},
 {cap:'Levodopa motor komplikasyonları',h:['Komplikasyon','Tanım','5. yılda sıklık'],r:[
 ['Doz sonu kötüleşmesi','Etki <4 saat','%70'],['On-off','Hızlı, öngörülemez dalgalanma','%15'],['Tepe dozu diskinezisi','Jeneralize kore / distoni','%60'],['Difazik diskinezi','Bacaklarda distonik kasılma','%2'],['Off distonisi','Sabaha karşı ağrılı kasılma','%10']]}]);

add('hareket','Tremor','Özet tablo',[{cap:'Tremor türleri',star:true,h:['Tür','Ne zaman','Örnek neden'],r:[
 ['İstirahat','Sadece istirahatte','Parkinson, Wilson, rubral'],['Postural','Postür korunurken','Esansiyel, artmış fizyolojik'],['Kinetik','Hareket sırasında','Esansiyel'],
 ['İntansiyonel','Hedefe yaklaşırken artar','Serebellar'],['Aksiyon','Postural + kinetik','Esansiyel tremor']]},
 {cap:'Esansiyel tremor – Parkinson',star:true,h:['','Esansiyel tremor','Parkinson'],r:[
 ['Tremor','Aksiyon','İstirahat'],['Başlangıç yaşı','10-20 ve 60-70','~60'],['Diğer yer','Boyun, ses','Çene, dil, alt ekstremite'],['Eşlik','Froment ile rijidite','Bradikinezi, rijidite, postural'],['Simetri','Simetrik','Asimetrik'],['Seyir','Çok yavaş','Progresif'],
 ['Tedavi','Propranolol 120-320 mg, primidon 25-250 mg','Levodopa vb.']]}]);

add('inme','İnme: tanım','Özet tablo',[{cap:'İskemik inme: rekanalizasyon tedavileri',star:true,h:['Tedavi','Zaman penceresi','Koşullar / doz'],r:[
 ['IV rtPA (alteplaz)','<4,5 saat','KB <185/110; BT’de kanama / geniş infarkt yok; majör travma / ameliyat / kanama yok; 0,9 mg/kg (%10 bolus, kalanı 1 saat)'],
 ['Endovasküler trombektomi','İlk 6 saat; seçilmişte 16-24 saat','Büyük damar tıkanıklığı; tPA kontrendike veya yanıtsız']]}]);

add('inme','Olgu 1','Özet tablo',[{cap:'MCA infarktı: dominant – non-dominant',star:true,h:['','Dominant (sol) MCA','Non-dominant (sağ) MCA'],r:[
 ['Dil','Afazi, apraksi','Afazi beklenmez'],['Bilişsel','—','Anozognozi, görsel-uzaysal ihmal'],['Yüz','Sağ santral fasiyal paralizi','Sol santral fasiyal paralizi'],['Motor / duyu','Sağ hemiparezi + hemihipoestezi','Sol hemiparezi + hemihipoestezi'],['Görme alanı','Sağ homonim hemianopsi','Sol homonim hemianopsi']]},
 {cap:'İskemik inme etiyolojisi',h:['Grup','Özellik'],r:[
 ['Büyük arter aterosklerozu','Damarda >%50 darlık; HT, DM, sigara, lipid'],['Kardiyoembolik','AF (%80), MI, mitral darlık, endokardit, mekanik kapak'],['Küçük arter','Lakün <15 mm; kortikal bulgu yok'],['Nadir nedenler','Diseksiyon, vaskülit, Moya-Moya, APS, orak hücre'],['Kriptojenik','Gruplara uymayan']]}]);

add('vertigo','Santral – periferik','Özet tablo',[{cap:'Santral – periferik vertigo',star:true,h:['Özellik','Santral','Periferik'],r:[
 ['Vertigo şiddeti','Hafif-orta','Şiddetli'],['Nörolojik bulgu','Olabilir (dizartri, disfaji, diplopi, hemiparezi)','Yok'],['Vertikal nistagmus','Olabilir','Olmaz'],['Nistagmus yönü','Bakışla değişebilir','Hep aynı yön'],
 ['Zamanla','Israrcı','Azalır, kaybolur'],['Ataksi','Şiddetli','Oturur / ayakta olabilir'],['Nedenler','İnme, MS, tümör, Wernicke','BPPV, Menière, vestibüler nörit']]}]);

add('vertigo','Benign paroksismal','Özet tablo',[{cap:'Periferik vertigo nedenleri',h:['','BPPV','Vestibüler nörit','Menière'],r:[
 ['Süre','≤30 sn','Dakikalar-günler','20 dk-12 saat'],['Tetik','Baş pozisyonu','Akut / spontan','Spontan atak'],['İşitme','Normal','Normal','Kayıp + tinnitus + dolgunluk'],['Tanı','Dix-Hallpike','Head impulse, kalorik','Odyometri'],['Tedavi','Epley / Semont','Akut ilaç + rehabilitasyon','Akut ilaç']]}]);

add('demans','Demans (bunama)','Özet tablo',[{cap:'Primer (dejeneratif) demanslar',star:true,h:['Tür','Sıklık','Çekirdek semptom','Ayırt edici'],r:[
 ['Alzheimer','%50-60','Yakın bellek (ipucundan fayda görmez)','Amiloid plak, nörofibriler yumak'],['Lewy cisimcikli','%15-20','Dikkat + görsel-uzaysal','Görsel halüsinasyon, parkinsonizm, dalgalanma, nöroleptik duyarlılığı'],
 ['Vasküler','%10-15','Basamaklı seyir','Fokal bulgu'],['Frontotemporal','%5-10','Davranış / dil','MMSE normal olabilir, içgörü kaybı']]}]);

add('demans','Mini-Mental','Özet tablo',[{cap:'MMSE puanlaması (toplam 30)',star:true,h:['Bölüm','Puan'],r:[['Oryantasyon (zaman 5 + yer 5)','10'],['Dikkat-konsantrasyon','5'],['Bellek (anlık 3 + yakın 3)','6'],['Lisan ve ilişkili işlevler','8'],['Yapılandırma','1']]}]);

add('demans','Konuşma, lisan','Özet tablo',[{cap:'Afazi tipleri (genel bilgi)',star:true,h:['Tip','Akıcılık','Anlama','Tekrar','Lezyon'],r:[
 ['Broca','Bozuk','İyi','Bozuk','Sol inferior frontal'],['Wernicke','Akıcı, anlamsız','Bozuk','Bozuk','Sol superior temporal'],['İletim','İyi','İyi','Bozuk','Arkuat fasikül'],['Global','Bozuk','Bozuk','Bozuk','Geniş sol MCA'],['Anomik','İyi','İyi','İyi','İsimlendirme bozuk']]}]);

add('uyku','Narkolepsi','Özet tablo',[{cap:'Narkolepsi tedavisi',h:['İlaç','Doz','Etki'],r:[
 ['Modafinil','200 mg tek doz','Gündüz uykululuğu'],['Armodafinil','150-200 mg sabah','Gündüz uykululuğu'],['Sodyum oksibat','4,5-9 g/gün (gece)','GAU, katapleksi, bozulmuş uyku'],['Amfetamin / metilfenidat','—','GAU'],['Selejilin','—','Katapleksi ve GAU (ilk tercih değil)']]}]);

add('nrs_giris','Diskopatiler','Özet tablo',[{cap:'Konus – kauda ekuina',star:true,h:['','Konus medullaris','Kauda ekuina'],r:[
 ['Motor / duyu','Simetrik, eyer tarzı duyu kaybı','Asimetrik'],['Sfinkter','Erken otonomik disfonksiyon','Geç'],['Ağrı','Olmayabilir','Var'],['Patella refleksi','Genellikle korunmuş','Azalmış / kayıp']]}]);

add('kafa_travma','Epidural hematom','Özet tablo',[{cap:'Epidural – subdural hematom',star:true,h:['','Epidural','Subdural'],r:[
 ['Kaynak','Arteriyel (a. meningea media)','Venöz (köprü venleri)'],['Şekil','Bikonveks (mercek), sütürü geçmez','Hilal, sütürü geçer'],['Klinik','Lüsid interval','Akut: bilinç kapalı; kronik: belirsiz'],['Mortalite','Erken cerrahide düşük','%40-60'],['Tedavi','Acil kraniotomi','Kraniotomi + drenaj']]}]);

add('omurga_travma','Patofizyoloji','Özet tablo',[{cap:'Nörojenik şok – spinal şok',star:true,h:['','Nörojenik şok','Spinal şok'],r:[
 ['Tanım','Hipotansiyon + bradikardi','Seviye altında tam fonksiyon kaybı (arefleksi)'],['Cilt','Sıcak, kuru','—'],['Bilinç / idrar','Normal','—'],['Tedavi','Aşırı sıvıdan kaçın, vazopressör','Sonra spastisite ve hiperrefleksi yerleşir']]}]);

add('hidrosefali','Tanım','Özet tablo',[{cap:'Hidrosefali sınıflaması',star:true,h:['Tür','Özellik'],r:[
 ['Komunikan','Ventriküler sistem dışında bozukluk (emilim)'],['Non-komunikan (obstrüktif)','Araknoid granülasyonlardan önce tıkanıklık; proksimalde ventrikül genişlemesi'],['Ex vacuo','Atrofiye bağlı; gerçek hidrosefali değil']]}]);

add('hidrosefali','Klinik','Özet tablo',[{cap:'Yaşa göre bulgular',h:['Grup','Bulgular'],r:[
 ['Prematüre','Apne, bradikardi, gergin fontanel, hızlı baş büyümesi'],['İnfant','İritabilite, kusma, uyku hali, makrosefali, batan güneş'],['Çocuk / erişkin','Baş ağrısı, kusma, diplopi, papilödem, abdusens felci']]}]);

add('ekstra_kitap','Görme ve görme','Özet tablo',[{cap:'Görme alanı kaybı – lezyon yeri',star:true,h:['Lezyon','Görme alanı kaybı'],r:[
 ['Retina / optik sinir','Tek gözde kayıp'],['Optik kiazma (hipofiz adenomu)','Bitemporal hemianopsi'],['Parietal (optik radyasyon üst)','Karşı homonim alt kadrananopsi'],['Temporal (optik radyasyon alt)','Karşı homonim üst kadrananopsi'],['Oksipital (PCA)','Karşı homonim hemianopsi, santral görme korunur'],['Bilateral oksipital','Kortikal körlük (ışık refleksi korunur); Anton']]}]);

add('ekstra_kitap','Diplopi','Özet tablo',[{cap:'Göz hareket sinirleri',star:true,h:['Sinir','Kas','Felç bulgusu'],r:[
 ['III okülomotor','Superior / inferior / medial rektus, inferior oblik, levator, pupil sfinkteri','Ptoz, dışa-aşağı deviasyon, midriyazis'],['IV troklear','Superior oblik','Vertikal diplopi (merdiven inerken), aşağı-içe bakış kısıtlı, baş karşıya eğik'],['VI abdusens','Lateral rektus','İçe kayma, dışa bakış kısıtlı, horizontal diplopi']]}]);

add('ekstra_kitap','Periferik fasiyal','Özet tablo',[{cap:'Periferik – santral fasiyal paralizi',star:true,h:['','Periferik','Santral'],r:[
 ['Tutulum','Alın dahil tüm yarım yüz','Sadece alt yüz'],['Lezyon','Aynı taraf (pons nükleus / sinir)','Karşı taraf (nükleus üstü)'],['Eşlik','Kulak ağrısı, tat / gözyaşı değişikliği','Hemiparezi, afazi'],['Örnek','Bell, Ramsay Hunt, pons lezyonu','MCA infarktı']]}]);
})();
