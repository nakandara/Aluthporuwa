import React from 'react';

const StudentsPage = () => {
  // Sample student data
  const students = [
    
    
      {
       "Index": 2,
       "Name": "D.M.K චලංගන ",
       "Parent": "D.M.L ප්‍රදීප් අසංක",
       "Adress": "අංක.119\/ඩී, ත්‍රිකුණාමලය පාර, කන්තලේ.",
       "NIC": "821453569V",
       "Marks": 95
      },
      {
       "Index": 8,
       "Name": "H. නෙතුම් සස්නිදු",
       "Parent": "H.M මදුෂිකා රත්නමාලි",
       "Adress": "අංක. 141\/ඒ, සේරුවිල පාර, කන්තලේ.",
       "NIC": "908622600V",
       "Marks": 92.5
      },
      {
       "Index": 1,
       "Name": "M.W.P ඉසලි සෙනාති සෙකනානායක",
       "Parent": "M.W.P දනුෂ්ක හේමන්ත",
       "Adress": "අංක.97\/බි,පරාක්‍රම මාවත, කන්තලේ.",
       "NIC": "891322291V",
       "Marks": 92
      },
    
      {
       "Index": 9,
       "Name": "K.P.W චතුල්කා සයුම්දි",
       "Parent": "K.P.W ජගත් නයනකානත",
       "Adress": "අංක. 304\/ඒ, යුනිට් 03, රජඇල, කන්තලේ.",
       "NIC": 198108703043,
       "Marks": 85
      },
      {
       "Index": 5,
       "Name": "B.M ලියොනි ලිහන්සා",
       "Parent": "B.M අජිත් කුමාර",
       "Adress": "අංක. 43, මැදගම, අග්බෝපුර.",
       "NIC": "833313037V",
       "Marks": 80
      },
      {
       "Index": 4,
       "Name": "K.P.G.D යලින්සදි",
       "Parent": "K.P.G සුසන්ත",
       "Adress": "අංක.110\/2, 86 ප්‍රදේශ, අග්බෝපුර, කන්තලේ.",
       "NIC": "811533556V",
       "Marks": 77
      },
      {
       "Index": 7,
       "Name": "G.G පුමිදු ඉදුෂ",
       "Parent": "A.G පද්මිනි",
       "Adress": "අංක.866\/බී,යුනිට් 14, වෙන්ඩ්‍රසන්පුර,කන්තලේ.",
       "NIC": "875330560V",
       "Marks": 71
      },
      {
       "Index": 6,
       "Name": "A.K.D ටිනාල් ආයුක්",
       "Parent": "A.K.D කසුන් මධුසංඛ",
       "Adress": "අංක.48\/16 ධීවරගම කන්තලේ.",
       "NIC": 199421903599,
       "Marks": 67.5
      },
      {
       "Index": 3,
       "Name": "H.M.D නෙතුන්සා",
       "Parent": "T.K.A නිමේෂා ලක්ෂාණි",
       "Adress": "අංක. ආර්\/66\/2 යුනිට් 14, ත්‍රිකුණාමලය පාර, කන්තලේ.",
       "NIC": "968222198V",
       "Marks": 66
      },
      {
       "Index": 19,
       "Name": "M.M.G.M.R ඉමන්ත පැහැසර",
       "Parent": "S.P ඉරේෂා සදමාලි",
       "Adress": "අංක.6\/114 ලයිට් පාර, කන්තලේ.",
       "NIC": "935783704V",
       "Marks": 85
      },
      {
       "Index": 10,
       "Name": "H. දිනුකි නෙහන්සා",
       "Parent": "H.M ඉරේෂා කුමුදුමාලි",
       "Adress": "අංක. 212\/ඒ, ජයන්තිපුර, වාන් ඇල, කන්තලේ.",
       "NIC": "935622260V",
       "Marks": 80
      },
      {
       "Index": 13,
       "Name": "K.T ටනුෂි සෙනල්ෂා",
       "Parent": "K.M උදයංගනි වික්‍රමසිංහ",
       "Adress": "අංක.180\/27, 85 පෙදෙස, නුවර පාර, කන්තලේ.",
       "NIC": "967582476V",
       "Marks": 80
      },
      {
       "Index": 14,
       "Name": "P.දෙනෙත් නිම්සර",
       "Parent": "K.G මධුමාලි දිසානායක.",
       "Adress": "අංක. 213\/06, 87 පෙදෙස, නුවර පාර, කන්තලේ.",
       "NIC": 200061704324,
       "Marks": 80
      },
      {
       "Index": 15,
       "Name": "R.M රිෂිත රන්දිමා ",
       "Parent": "R.M දුමින්ද",
       "Adress": "අංක. 85,රජවැව, අග්බෝපුර",
       "NIC": "821592259V",
       "Marks": 80
      },
      {
       "Index": 17,
       "Name": "J.M ඩෙනුත් ඕනක්ෂ බිනුදිත",
       "Parent": "J.M අනුර බංඩාර",
       "Adress": "අංක.51, රජවැව, අග්බෝපුර.",
       "NIC": "820874692V",
       "Marks": 80
      },
      {
       "Index": 22,
       "Name": "G.K.K සතීෂ ප්‍රමෝද",
       "Parent": "K.R සේපාලිකා ගමගෙදර",
       "Adress": "අංක.49\/බී 86 පෙදෙස, අග්බෝපුර.",
       "NIC": "855823349V",
       "Marks": 80
      },
      {
       "Index": 23,
       "Name": "B.M නෙතුලි ආකර්ෂා",
       "Parent": "B.M සමිර ප්‍රසන්න",
       "Adress": "අංක. 80, රජවැව, අග්බෝපුර.",
       "NIC": "932831104V",
       "Marks": 80
      },
      {
       "Index": 12,
       "Name": "K.අධීෂ ඉල්ෂාන්",
       "Parent": "D.M කෙෘශල්‍යා මදුවනති",
       "Adress": "අංක.206\/බී, යුනිට් 22, අග්බෝපුර, කන්තලේ.",
       "NIC": "937383258V",
       "Marks": 78.5
      },
      {
       "Index": 18,
       "Name": "D.G නෙතුෂි දුලන්‍යා",
       "Parent": "D.G නුවන් දිල්ෂාන්",
       "Adress": "අංක. 63, යුනිට් 22, රජවැව, අගබෝපුර.",
       "NIC": "952721208V",
       "Marks": 78.5
      },
      {
       "Index": 20,
       "Name": "W.K අශ්ලේෂා දම්සතිනි ",
       "Parent": "W.K හසිත සංජීව",
       "Adress": "අංක.154\/5, ධීවරගම ඉදිරිපිට, කන්තලේ.",
       "NIC": 198504900112,
       "Marks": 75
      },
      {
       "Index": 11,
       "Name": "J.M ගගනිදු තිසරමන",
       "Parent": "J.M අජිත් ඉන්දික",
       "Adress": "අංක. 44, මැදගම, අග්බෝපුර, කනතලේ",
       "NIC": "903580992V",
       "Marks": 74.8
      },
      {
       "Index": 16,
       "Name": "Y.K නුවිදු නුමේෂ්",
       "Parent": "Y.K ගයාන් චාමර",
       "Adress": "අංක.36, මැදගම,අග්බෝපුර.",
       "NIC": "941302530V",
       "Marks": 71
      },
      {
       "Index": 24,
       "Name": "B.M සනුලි හිමන්සා",
       "Parent": "B.M අජිත් කුමාර",
       "Adress": "අංක. 79\/ඒ, රජවැව අග්බෝපුර.",
       "NIC": "891733364V",
       "Marks": 71
      },
      {
       "Index": 21,
       "Name": "M.A නිම්සිත මිහිනුල",
       "Parent": "H.M.D උමේෂා චමෝදි",
       "Adress": "අංක.368\/බී\/1, යුනිට් 04, රජඇල, කන්තලේ.",
       "NIC": "977441820V",
       "Marks": 58
      },
      {
       "Index": 29,
       "Name": "K දිසේජා ඔමින්දී ",
       "Parent": "G.A.P මහිෂි සදමාලි",
       "Adress": "අංක.50\/3 ගැමුණු මාවත, කන්තලේ.",
       "NIC": "885192580V",
       "Marks": 95
      },
      {
       "Index": 30,
       "Name": "A.G රිකිත රන්යුරු ",
       "Parent": "M.W චතුරිකා දිලානි",
       "Adress": "අංක. 36\/1 රජඇල පාර, කන්තලේ.",
       "NIC": "895981184V",
       "Marks": 95
      },
      {
       "Index": 35,
       "Name": "W.M මහීෂ නෙත්සර ",
       "Parent": "W.M දිල්ෂාන් සුමනසේකර",
       "Adress": "අංක. 47\/ඒ, ප්‍රියන්ත මාවත, කන්තලේ.",
       "NIC": "962981453V",
       "Marks": 92.5
      },
      {
       "Index": 33,
       "Name": "H.M අයෝධ්‍යා සිතුමිනි",
       "Parent": "H.M දමිත් ඉන්දික",
       "Adress": "අංක. 58\/6H ලයිට පාර, කන්තලේ.",
       "NIC": "872872809V",
       "Marks": 91
      },
      {
       "Index": 34,
       "Name": "M.M සිත්ම ආකේෂ් ",
       "Parent": "K.A නිශානි දිනුෂිකා",
       "Adress": "අංක 549\/බී, යුනිට් 04, රජඇල, කන්තලේ.",
       "NIC": "857020260V",
       "Marks": 85
      },
      {
       "Index": 36,
       "Name": "M.G රනුකි එහන්සා",
       "Parent": "M.G රුවන් ජයලත්",
       "Adress": "අංක. 695\/බී, යුනිට් 04, රජඇල.",
       "NIC": "823502630V",
       "Marks": 85
      },
      {
       "Index": 37,
       "Name": "K.A ආවින්යා සඳදිනි",
       "Parent": "G.M සඳුනි දනුෂිකා",
       "Adress": "අංක. 50, යුනිට් 22,අග්බෝපුර.",
       "NIC": "947011898V",
       "Marks": 85
      },
      {
       "Index": 27,
       "Name": "D.G අගිත ඉදුවන",
       "Parent": "D.G ජනරංජන",
       "Adress": "අංක. 63, යුනිට් 22, අග්බෝපුර.",
       "NIC": "930663344V",
       "Marks": 81
      },
      {
       "Index": 26,
       "Name": "K.M.K පූර්ණ අභිෂේක් ",
       "Parent": "S.P නිරෝෂා චාන්දනි",
       "Adress": "අංක.57\/2 ඒ, ලයිට් පාර, කන්තලේ.",
       "NIC": "8966631543V",
       "Marks": 80
      },
      {
       "Index": 31,
       "Name": "J.M කසුන්තා ගෞරවි",
       "Parent": "J.M අජිත් ධම්මික බංඩාර",
       "Adress": "අංක. 54, රජවැව, අග්බෝපුර.",
       "NIC": "863650372V",
       "Marks": 76
      },
      {
       "Index": 25,
       "Name": "H.M මිනිදුලී ආශිංසනා",
       "Parent": "H.M ධනුෂ්ක බංඩාර",
       "Adress": "අංක. 187, ජයන්තිපුර, වාන්ඇල, කන්තලේ.",
       "NIC": 198816810028,
       "Marks": 71
      },
      {
       "Index": 38,
       "Name": "M දුල්මික ටෂේන්",
       "Parent": "M.G නිසංසලා අරුණි",
       "Adress": "අංක. 57,යුනිට් 22, අග්බෝපුර.",
       "NIC": "905803689V",
       "Marks": 70
      },
      {
       "Index": 39,
       "Name": "S.M.P සනුකි සෙනුල්‍යා",
       "Parent": "S.M.P අරුණ අසේල",
       "Adress": "අංක. 7\/105\/ඊ, ලයිට් පාර, කන්තලේ",
       "NIC": 198227201168,
       "Marks": 66
      },
      {
       "Index": 32,
       "Name": "W.L දනුජ හිතේෂ්",
       "Parent": "W.L උපුල් ලියනගේ",
       "Adress": "අංක. 842\/3, යුනිට් 14, වෙන්ඩ්‍රසන්පුර, කන්තලේ.",
       "NIC": "862090560V",
       "Marks": 65
      },
      {
       "Index": 28,
       "Name": "G.P සසංක අභිමාන",
       "Parent": "G.P ප්‍රියංග නුවන් ",
       "Adress": "අංක 588, යුනිට් 04, රජඇල, කන්තලේ.",
       "NIC": "883004329V",
       "Marks": 62
      },
      {
       "Index": 40,
       "Name": "M.H නොනමි ඔමානා",
       "Parent": "M.H නාලක වෙරංග",
       "Adress": "අංක. 69,85 හංදිය, අග්බෝපුර.",
       "NIC": "832663018V",
       "Marks": 66
      },
      {
       "Index": 41,
       "Name": "J.G හංසක අභිමාන් ",
       "Parent": "J.G සජිත් ප්‍රියලාල්",
       "Adress": "අංක. 132\/ඒ, ජයන්ත මාවත, කනතලේ.",
       "NIC": "940193648V",
       "Marks": 86
      },
      {
       "Index": 42,
       "Name": "K.C ගිමන්ස ගුණවර්ධන",
       "Parent": "H.M අමාලි චන්දිමා ",
       "Adress": "අංක. 82\/41, බංඩාරණායක මාවත, කන්තලේ.",
       "NIC": "947881698V",
       "Marks": 92
      },
      {
       "Index": 43,
       "Name": "A වෙනුතිකා ඔවිනි",
       "Parent": "A. ඩිලුෂන් ",
       "Adress": "අංක. 243\/2, යුනිට් 02, පේරාරු කන්තලේ.",
       "NIC": 199523503888,
       "Marks": 82.5
      },
      {
       "Index": 44,
       "Name": "G.D විදුෂා විදවනි",
       "Parent": "G.P නිරූපා",
       "Adress": "අංක. 101 එච්, යුනිට් 03, රජඇල.",
       "NIC": "V",
       "Marks": 70
      },
      {
       "Index": 45,
       "Name": "B.E.M කෙනේලි සෙව්වන්දි",
       "Parent": "B.E.M උපුල් බංඩාර",
       "Adress": "අංක. 298\/3, රජඇල.",
       "NIC": "810160217V",
       "Marks": 70
      },
      {
       "Index": 46,
       "Name": "K.G ඔෂද අභිසෙස්",
       "Parent": "K.G මහේෂ් මදුරන්ග",
       "Adress": "අංක. 03, සිංහපුර, තඹලමුව.",
       "NIC": "950452730V",
       "Marks": 41
      },
      {
       "Index": 47,
       "Name": "S. යසිත් සස්මිත",
       "Parent": "S. චිරාන් ජීවන්ත",
       "Adress": "අංක. 179, සේරුවිල පාර, කන්තලේ.",
       "NIC": "880013718V",
       "Marks": 95
      },
      {
       "Index": 48,
       "Name": "G. සුහර්ෂා අනුහෂි",
       "Parent": "G.A නෙවිල් ප්‍රනාන්දු",
       "Adress": "අංක. 15\/ඒ, යුනිට් 19, අග්බෝපුර.",
       "NIC": "831563990V",
       "Marks": 85
      },
      {
       "Index": 49,
       "Name": "D ඉදුරන්ග කේෂවද",
       "Parent": "K.G නිරෝෂන්",
       "Adress": "අංක. 97\/3, පල්ලිය පාරල 86, පෙදෙස, අග්බෝපුර.",
       "NIC": 198867902638,
       "Marks": 73
      },
      {
       "Index": 50,
       "Name": "A පියුමාලි යෙතුනිමා",
       "Parent": "A කනිෂක ගයාන්",
       "Adress": "අංක. 402\/9, මහා වීදිහය කන්තලේ.",
       "NIC": "V",
       "Marks": 94
      },
      {
       "Index": 51,
       "Name": "R.M තෂ්නි සිහන්යා",
       "Parent": "R.M අශෝක රත්නායාක",
       "Adress": "අංක. 05, ආරියවංශ මාවත, කන්තලේ. ",
       "NIC": "771871925V",
       "Marks": 100
      },
      {
       "Index": 52,
       "Name": "R.M සනුල විහස්",
       "Parent": "R.M බුද්ධික රඹුක්වැල්ල",
       "Adress": "අංක. 13, ලීලාරත්න මාවත, කන්තලේ.",
       "NIC": 198228704045,
       "Marks": 95
      },
      {
       "Index": 53,
       "Name": "H.D දෙව්ලි රසදුනි",
       "Parent": "H.D වසන්ත උදය කුමාර",
       "Adress": "අංක. 296\/බී, ජනසවි මාවත, කන්තලේ.",
       "NIC": "870270704V",
       "Marks": 80
      },
      {
       "Index": 54,
       "Name": "D.D දිමාගි නානයක්කාර",
       "Parent": "D.D සමීර දිනේෂ්",
       "Adress": "අංක. 57\/ඒ, ත්‍රිකුණාමලය පාර, කන්තලේ.",
       "NIC": "197617602214V",
       "Marks": 95
      },
      {
       "Index": 65,
       "Name": "E.A.D.K ඉදුෂිකා ",
       "Parent": "E.A.D නුවන් ධනුෂ්ක ",
       "Adress": "අංක. 35\/ඒ, ආරියවංශ මාවත, කන්තලේ.",
       "NIC": "19870920830V",
       "Marks": 96
      },
      {
       "Index": 56,
       "Name": "G.D සසෙල්යා වින්සදි",
       "Parent": "G.D දයා චමින්ද",
       "Adress": "අංක. 286, දුම්රිය පටුමග, කන්තලේ.",
       "NIC": "802142404V",
       "Marks": 95
      },
      {
       "Index": 57,
       "Name": "G.D සවිනු වින්සිත",
       "Parent": "G.D දයා චමින්ද",
       "Adress": "අංක. 286, දුම්රිය පටුමග, කන්තලේ.",
       "NIC": "802142404V",
       "Marks": 95
      },
      {
       "Index": 58,
       "Name": "R.M මෙත්මි මෙතුම්සා",
       "Parent": "R.M නිමන්ත රොෂාන්",
       "Adress": "අංක. 744\/බී, රජඇල පාර, කන්තලේ.",
       "NIC": "871111006V",
       "Marks": 95
      },
      {
       "Index": 59,
       "Name": "H‍ තෙනුජ   බාසිත",
       "Parent": "H.S ලක්ෂිත   ප්‍රනාන්දු",
       "Adress": "අංක. 391, අග්‍රබෝධි පාර, කන්තලේ.",
       "NIC": "750920225V",
       "Marks": 95
      },
      {
       "Index": 60,
       "Name": "P.S ශෙනායා ",
       "Parent": "P ප්‍රියන්ත සුනිමල්",
       "Adress": "අංක.99\/3,87 පෙදෙස, නුවර පාර, කන්තලේ.",
       "NIC": "851115013V",
       "Marks": 95
      },
      {
       "Index": 55,
       "Name": "K.M දනුදි   තිහන්සා",
       "Parent": "J.A යමුනා   කාන්ති",
       "Adress": "අංක. 41, ආරියවංශ මාවත, කන්තලේ.",
       "NIC": 918657103754,
       "Marks": 82
      },
      {
       "Index": 68,
       "Name": "N.M.A ඔහස් අභිෂ්ට",
       "Parent": "N.M.A ජනක දමිත්",
       "Adress": "අංක. 53, මැදගම, අග්බෝපුර",
       "NIC": "862690826V",
       "Marks": 76
      },
      {
       "Index": 69,
       "Name": "R.M යුහස් රුවන්",
       "Parent": "R.M අරුණ රුවන්",
       "Adress": "අංක. 631, යුනිට් 05, රජඇල, කන්තලේ.",
       "NIC": "85355523721V",
       "Marks": 76
      },
      {
       "Index": 61,
       "Name": "K.H මෙසදු මින්තක",
       "Parent": "K.H පාලිත මහින්ද",
       "Adress": "අංක. 15\/3 පරාක්‍රම මාවත, කන්තලේ.",
       "NIC": "690752441V",
       "Marks": 75
      },
      {
       "Index": 66,
       "Name": "W.W.M දෙව්ම්ලි අහස්මා",
       "Parent": "W.W.M නුවන් දර්ශන",
       "Adress": "අංක. 22\/3\/1, පන්සල්ගොඩැල්ල, කන්තලේ.",
       "NIC": "922712077V",
       "Marks": 75
      },
      {
       "Index": 67,
       "Name": "I.G. මිනුදි සජන්යා",
       "Parent": "I.G.M පුෂ්ප කුමාර",
       "Adress": "අංක. 875\/බී, යුනිට් 14, වෙන්ඩ්‍රාසන්පුර, කන්තලේ.",
       "NIC": "830670238V",
       "Marks": 75
      },
      {
       "Index": 64,
       "Name": "M.A චිතුලි සසේන්යා",
       "Parent": "M.A නිශාන්ත ජනරන්ජන",
       "Adress": "අංක. 954\/ඒ,  යුනිට් 15, වෙන්ඩ්‍රාසන්පුර, කන්තලේ.",
       "NIC": "890072674V",
       "Marks": 69
      },
      {
       "Index": 62,
       "Name": "D.M තරුලි",
       "Parent": "D.M ජානක සංජීව",
       "Adress": "අංක. 303\/16 සී, 91 ප්‍රදේශ, අසපුව පාර, කන්තලේ.",
       "NIC": "801430970V",
       "Marks": 65
      },  
      {
       "Index": 63,
       "Name": "D.M තසිනි මෙතාරා",
       "Parent": "D.M ජානක සංජීව",
       "Adress": "අංක. 303\/16 සී, 91 ප්‍රෙද්ශ, අසපුව පාර, කන්තලේ.",
       "NIC": "801430970V",
       "Marks": 65
      },
      {
       "Index": 79,
       "Name": "K.A යෂිදු රශ්මික",
       "Parent": "K.A චමිනද දේශප්‍රිය",
       "Adress": "අංක. 555, ආරියවංශ මාවත, කන්තලේ.",
       "NIC": 198314500029,
       "Marks": 96
      },
      {
       "Index": 74,
       "Name": "M.D නෙතග සලිදු",
       "Parent": "M.D බුද්ධික කුමාර",
       "Adress": "අංක .37\/2 පරාක්‍රම මාවත කන්තලේ.",
       "NIC": "842462134V",
       "Marks": 95
      },
      {
       "Index": 80,
       "Name": "J.A මෙත්මි දහම්සා",
       "Parent": "W.R.G කුසුම් කාන්ති",
       "Adress": "අංක. 162\/2, 87 පෙදෙස,නුවර පාර, කන්තලේ.",
       "NIC": "847193751V",
       "Marks": 95
      },
      {
       "Index": 81,
       "Name": "E.M ශයිම් නථාෂා",
       "Parent": "E.M සුමිත් ජානක",
       "Adress": "අංක. 103්‍\/බී, 87 පෙදෙස, කන්තලේ.",
       "NIC": "812973193V",
       "Marks": 95
      },
      {
       "Index": 82,
       "Name": "K.H දමික ඉදුවර",
       "Parent": "K.H.P චමිිින්ද සිල්වා",
       "Adress": "අංක. 231\/4 අග්‍රබෝධි මාවත, කන්තලේ.",
       "NIC": "811363189V",
       "Marks": 95
      },
      {
       "Index": 73,
       "Name": "M.R.M රෙසිදු",
       "Parent": "M.R.M වසන්ත කුමාර",
       "Adress": "අංක. 542, යුනිට් 03, රජඇල, කන්තලේ.",
       "NIC": "7911624416V",
       "Marks": 91
      },
      {
       "Index": 70,
       "Name": "B.D චමත්කි නානායක්කාර",
       "Parent": "B ශානක සුරංජිත්",
       "Adress": "අංක.45\/26 ජනසවි මාවත, කන්තලේ.",
       "NIC": "902611746V",
       "Marks": 90
      },
      {
       "Index": 84,
       "Name": "T.M කසුනි හංසමාලි",
       "Parent": "S.H ශෂිකලා මධුවන්ති",
       "Adress": "අංක.68, සමෘද්ධි  මාවත, කන්තලේ.",
       "NIC": "905444131V",
       "Marks": 87.5
      },
      {
       "Index": 83,
       "Name": "W.G යෙහස් වින්දිය",
       "Parent": "W.G රුවන් චින්තක",
       "Adress": "අංක.177\/9,  ජලපවිත්‍රාගාරය, කන්තලේ.",
       "NIC": "851303707V",
       "Marks": 86
      },
      {
       "Index": 72,
       "Name": "G.T දිනේත්‍රා",
       "Parent": "D.G මානෙල්",
       "Adress": "අංක. 119\/ඒ, ආරියවංශ මාවත, කන්තලේ.",
       "NIC": "788102577V",
       "Marks": 85
      },
      {
       "Index": 78,
       "Name": "E.M විනුල් සස්විදු ",
       "Parent": "E.M ජයන්ත කුමාර",
       "Adress": "අංක. 25\/45 ඒ, ජනසවි මාවත, කන්තලේ.",
       "NIC": "772382693V",
       "Marks": 80
      },
      {
       "Index": 75,
       "Name": "I.G නිසිත නවිදු",
       "Parent": "I.G නන්දන සුරංග",
       "Adress": "අංක. 3, රජවැව, අග්බෝපුර.",
       "NIC": "901181080V",
       "Marks": 77
      },
      {
       "Index": 71,
       "Name": "P.B ප්‍රභාසර කරුණාරත්න",
       "Parent": "A.G ඉනෝකා සමන්ති",
       "Adress": "අංක. 43\/61, ප්‍රියන්ත මාවත, කන්තලේ",
       "NIC": "807260588V",
       "Marks": 72.5
      },
      {
       "Index": 77,
       "Name": "J.L මිනුද තෙව්මික",
       "Parent": "J.L නලීන් ප්‍රියදර්ශන",
       "Adress": "අංක. 23, 84 පෙදෙස, අග්බෝපුර.",
       "NIC": 198504003112,
       "Marks": 70
      },
      {
       "Index": 76,
       "Name": "W.G අමීෂා සත්සරණී",
       "Parent": "B.G රෝසිනි දුලීකා",
       "Adress": "අංක. 21\/02, ඩී, සේනානායක මාවත, කන්තලේ.",
       "NIC": 19826260285,
       "Marks": 65
      },
      {
       "Index": 96,
       "Name": "B.G අමීෂා චාරුණි",
       "Parent": "B.G සනත් කුමාර",
       "Adress": "අංක. 336\/5, ආරියවංශ මාවත, කන්තලේ.",
       "NIC": 198713900800,
       "Marks": 100
      },
      {
       "Index": 99,
       "Name": "D.M.D මෙත්සිළු",
       "Parent": "D.M.D ප්‍රියදසුන් ",
       "Adress": "අංක.70, ආරියවංශ මාවත, කන්තලේ.",
       "NIC": "851172319V",
       "Marks": 100
      },
      {
       "Index": 85,
       "Name": "A.H.A උමෙෂිත",
       "Parent": "Y.B දිලානි",
       "Adress": "අංක.92\/5,යෝවුන් මාවත, කන්තලේ.",
       "NIC": "817622852V",
       "Marks": 95
      },
      {
       "Index": 86,
       "Name": "M ලියානා",
       "Parent": "M.R රෝහිත",
       "Adress": "අංක. 739\/බී, යුනිට් 04, රජඇල පාර, කන්තලේ.",
       "NIC": 198512803757,
       "Marks": 95
      },
      {
       "Index": 87,
       "Name": "S.P.D තිවේන් විජේසුරිය",
       "Parent": "M.M අනුෂා ශ්‍යාමලි",
       "Adress": "අංක.739\/බී\/1, යුනිට් 04, රජඇල, නක්තලේ.",
       "NIC": "887193037V",
       "Marks": 95
      },
      {
       "Index": 92,
       "Name": "W.H ඉදුවර ජයරත්න",
       "Parent": "K.G දමයන්ති",
       "Adress": "අංක.81, තිුකුණාමලය පාර, කන්තලේ.",
       "NIC": "795342397V",
       "Marks": 95
      },
      {
       "Index": 95,
       "Name": "D.M තෙමස් විෂ්මිත",
       "Parent": "D.M විජේසේකර ",
       "Adress": "අංක. 302, ඒ, ආරිවංශ මාවත, කන්තලේ.",
       "NIC": "781262595V",
       "Marks": 95
      },
      {
       "Index": 100,
       "Name": "A.M.R යෙහෙන්",
       "Parent": "S.M ශානිකා නිලක්ෂි",
       "Adress": "අංක.28\/6, ආරියවංශ මාවත, කන්තලේ.",
       "NIC": 198868600439,
       "Marks": 92.5
      },
      {
       "Index": 89,
       "Name": "A.M චනුක ඩේෂික",
       "Parent": "A.M පාලිත",
       "Adress": "අංක. 164\/ඒ, ත්‍රිකුණාමලය පාර, කන්තලේ.",
       "NIC": "801142206V",
       "Marks": 86
      },
      {
       "Index": 91,
       "Name": "M.S වෙතුජ චනද්‍රතිලක",
       "Parent": "M.D ප්‍රදීප් චන්ද්‍රතිලක",
       "Adress": "අංක.31\/ඩී, පලමුවන හරස් පටුමග, පරාක්‍රම මාවත, කන්තලේ.",
       "NIC": "821972159V",
       "Marks": 85
      },
      {
       "Index": 97,
       "Name": "R.M කෂ්මිත දුල්නිදු",
       "Parent": "R.M මනෝජ",
       "Adress": "අංක.69, 86 පෙදෙස, අග්බෝපුර.",
       "NIC": 198915202096,
       "Marks": 79
      },
      {
       "Index": 94,
       "Name": "P.H බුවිනි එවින්‍යා ",
       "Parent": "P.H අරුණ ප්‍රසාද්",
       "Adress": "අංක. 832\/ඩී, යුනිට් 14, වෙන්ඩ්‍රාසන්පුර.",
       "NIC": "793513275V",
       "Marks": 71
      },
      {
       "Index": 88,
       "Name": "J.P ඉනුක දම්සර",
       "Parent": "J.P අමල්සිරි",
       "Adress": "අංක. ඩී\/1, යුනිට් 16, වෙනඩ්‍රාස්නපුර.",
       "NIC": "911183340V",
       "Marks": 66
      },
      {
       "Index": 90,
       "Name": "R.M තවින්සා නයනා",
       "Parent": "N.L.D.C පත්මා කාන්ති",
       "Adress": "අංක. 17\/බී, 84 පෙදෙස, අග්බෝපුර.",
       "NIC": 198277003044,
       "Marks": 50.5
      },
      {
       "Index": 98,
       "Name": "R.I අෂිෂා රාජපක්ෂ",
       "Parent": "B.P නදීෂා",
       "Adress": "අංක. 29\/15, ජලපවිත්‍රාගාර අසල, කන්තලේ.",
       "NIC": 19855410792,
       "Marks": 50.5
      },
      {
       "Index": 93,
       "Name": "G.R රිෂිනි නිහන්සා",
       "Parent": "G.R පියතිලක ගම්ලත්",
       "Adress": "අංක. 125, සේරුවිල පාර,කන්තලේ.",
       "NIC": "741773716V"
      },
      {
       "Index": 105,
       "Name": "A.H සෙතික අකේෂ්",
       "Parent": "A.H නලීන් තුෂාර",
       "Adress": "අංක. 37, නුවර පාර, කන්තලේ.",
       "NIC": "773661049V",
       "Marks": 99
      },
      {
       "Index": 110,
       "Name": "K.A අනර්ක ද ආබෘෘ ",
       "Parent": "K.C චතුරංග ද ආබෘෘ",
       "Adress": "අංක. 238\/2, සිවන් කෝවිල් පාර, කන්තලේ.",
       "NIC": "860653559V",
       "Marks": 96
      },
      {
       "Index": 114,
       "Name": "H.G.H.M හෙසද සෙහස් ",
       "Parent": "H.H.M ඉරෝෂ රුවන්",
       "Adress": "අංක. 98, මහා විදිය, කන්තලේ.",
       "NIC": "850271348V",
       "Marks": 96
      },
      {
       "Index": 107,
       "Name": "S.A යශිදි ලෂේනා",
       "Parent": "S.A නුවන් දර්ශන",
       "Adress": "අංක. 15, ගැමුණු මාවත කන්තලේ.",
       "NIC": "883292022V",
       "Marks": 95
      },
      {
       "Index": 102,
       "Name": "S. අශේන් අබේගුනසේකර ",
       "Parent": "K.G අබේගුනසේකර",
       "Adress": "අංක. 376, මහා විදිය, කන්තලේ.",
       "NIC": "893330429V",
       "Marks": 93
      },
      {
       "Index": 104,
       "Name": "B.H.A යෙනුලි හෙසන්යා",
       "Parent": "B.H.A බන්දුල කුලතුංග",
       "Adress": "අංක.137\/02, ත්‍රිකුණාමලය පාර, කන්තලේ.",
       "NIC": 197616801079,
       "Marks": 86
      },
      {
       "Index": 111,
       "Name": "W.M චෙනිත යෙව්න්",
       "Parent": "W.M චමින්ද ලාල්",
       "Adress": "අංක.723\/ඩී, රජඇල පාර කන්තලේ.",
       "NIC": 198226410047,
       "Marks": 85
      },
      {
       "Index": 115,
       "Name": "H.G යෙනුජි සේනුලි",
       "Parent": "G.W.S තිලිනි වඩුගේ ",
       "Adress": "අංක. 663\/සී, යුනිට් 04, රජඇල කන්තලේ.",
       "NIC": "887150273V",
       "Marks": 81
      },
      {
       "Index": 101,
       "Name": "D.M.E ආදර්ශා",
       "Parent": "D.M.V.R.D දිසානායක",
       "Adress": "අංක.595\/ඒ, යුනිට් 05 රජඇල, කන්තලේ. ",
       "NIC": "851311742V",
       "Marks": 76
      },
      {
       "Index": 112,
       "Name": "T ටයිශි යුශේන්",
       "Parent": "D.M නිල්මිණි දිසානායක",
       "Adress": "අංක. 7\/6\/ඒ, භාතියගම, කන්තලේ.",
       "NIC": "835440303V",
       "Marks": 76
      },
      {
       "Index": 109,
       "Name": "D.M ශලනි වින්ද්‍යා ",
       "Parent": "D.M ලක්ෂ්මන් දිසානායක",
       "Adress": "අංක.7\/75, ජයනත මාවත, කන්තලේ.",
       "NIC": "810422211V",
       "Marks": 75
      },
      {
       "Index": 103,
       "Name": "K ගවේෂ් කවිෂාන්",
       "Parent": "K ප්‍රියන්ත කුමාර",
       "Adress": "අංක. 23\/බී, ධීවරගම, කන්තලේ.",
       "NIC": "803456046V",
       "Marks": 70
      },
      {
       "Index": 106,
       "Name": "R.M කවීෂා ගීත්මි",
       "Parent": "S.P එරන්දි රසිකා",
       "Adress": "අංක. බී\/120\/4, අග්බෝගම පාර, බටුකච්චිය, අග්බෝපුර.",
       "NIC": "978200915V",
       "Marks": 70
      },
      {
       "Index": 108,
       "Name": "A.M චෙණුධි විනාරා",
       "Parent": "A.M සමිත් මධුෂාන්",
       "Adress": "අංක. ආර්\/103,යුනිට් 14, වෙන්ඩ්‍රාසන්පුර.",
       "NIC": "970763511V",
       "Marks": 60
      },
      {
       "Index": 113,
       "Name": "K.A නුලන්දි සෙනාරා",
       "Parent": "B.G.A.M ප්‍රියදර්ශනි",
       "Adress": "අංක. 488\/ඒ, යුනිට් 03, රජඇල, කන්තලේ.",
       "NIC": "878560264V",
       "Marks": 60
      },
      {
       "Index": 129,
       "Name": "V.G හසිනි ශිල්පිකා ",
       "Parent": "V.G අජිත් ප්‍රියන්ත",
       "Adress": "අංක.727\/බී, යුනිට් 04, රජඇල පාර, කන්තලේ.",
       "NIC": 198616503773,
       "Marks": 96
      },
      {
       "Index": 119,
       "Name": "K සවිරු ශ්‍රී බිවෝන්ෂ ",
       "Parent": "D.T ශානිකා ",
       "Adress": "අංක. 509\/ කේ, පේරාරුව කන්තලේ.",
       "NIC": "915874800V",
       "Marks": 95
      },
      {
       "Index": 120,
       "Name": "K බනුජ සසන්",
       "Parent": "K.A මහේෂ් සුරංග",
       "Adress": "අංක. 23\/3, ආරියවංශ මාවත, කන්තලේ.",
       "NIC": 198518002627,
       "Marks": 95
      },
      {
       "Index": 121,
       "Name": "K කවීන්ස මතීෂ් ",
       "Parent": "K තරිදු ලක්මාල්",
       "Adress": "අංක. 213\/1, මහා වීදිය, කන්තලේ.",
       "NIC": "882995003V",
       "Marks": 95
      },
      {
       "Index": 127,
       "Name": "M හිල්මි හාසික්",
       "Parent": "A.M හිල්වි",
       "Adress": "අංක.169\/3, පෙරාතුවේලි කන්තලේ.",
       "NIC": "820823982V",
       "Marks": 95
      },
      {
       "Index": 118,
       "Name": "W.G මහෝද නයරස් ",
       "Parent": "W.G සංජය නන්දන ",
       "Adress": "අංක. 43\/ඒ, ගැමුණු මාවත, කන්තලේ.",
       "NIC": "832222445V",
       "Marks": 94
      },
      {
       "Index": 117,
       "Name": "N.P මුතුකලන ප්‍රනාන්දු",
       "Parent": "N.A දොන් චමිලා ",
       "Adress": "අංක.96\/01, පරාක්‍රම මාවත කන්තලේ.",
       "NIC": 198358100267,
       "Marks": 93
      },
      {
       "Index": 116,
       "Name": "M.M මිහිනුලි යෙහන්සා ",
       "Parent": "D.G තිසාරා දිල්ෂානි ",
       "Adress": "අංක. 124\/ඒ, ත්‍රිකුණාමලය පාර, කන්තලේ.",
       "NIC": "886773471V",
       "Marks": 86
      },
      {
       "Index": 123,
       "Name": "N.T සිතිනි දෙව්හාරි",
       "Parent": "M.T.R.K කරුණාරත්න",
       "Adress": "අංක. 82\/13, බණ්ඩාරනායක මාවත, කන්තලේ.",
       "NIC": "783270463V",
       "Marks": 84
      },
      {
       "Index": 122,
       "Name": "H.P.M බොවිරු ධනේෂ්",
       "Parent": "H.P.M අලහාකෝන්",
       "Adress": "අංක. 44\/ඒ, යුනිට් 19, අග්බෝපුර, කන්තාලේ.",
       "NIC": "811310719V",
       "Marks": 81
      },
      {
       "Index": 124,
       "Name": "A.V.V මෙත්රග ආරියවංශ",
       "Parent": "A.V මදුරංග",
       "Adress": "අංක.449\/ඒ, යුනිට් 05, රජඇල, කන්තලේ.",
       "NIC": 198507101143,
       "Marks": 81
      },
      {
       "Index": 126,
       "Name": "H.M මිනුගි තසන්යා",
       "Parent": "H.M ගමිල තුෂාර",
       "Adress": "අංක.21\/1, ආරියවංශ මාවත, කන්තලේ.",
       "NIC": "830670483V",
       "Marks": 80
      },
      {
       "Index": 125,
       "Name": "B.P මහීෂ ගගුල ",
       "Parent": "K.G ජයන්ති ස්වර්නලතා",
       "Adress": "අංක. 7\/33\/1 ලයිට්පාර, භාතියගම.",
       "NIC": "835501477V",
       "Marks": 70
      },
      {
       "Index": 130,
       "Name": "P.A සහස්ම ද සිල්වා",
       "Parent": "K.G රුවිනි කුමාරි ",
       "Adress": "අංක. 40, හෙද නිල නිවාස, මුලික රෝහල, කන්තලේ.",
       "NIC": "886572921V",
       "Marks": 69
      },
      {
       "Index": 128,
       "Name": "A.W.M ලිනුකි රිසත්මා ",
       "Parent": "A.W.M කැලුම් කුමාර ",
       "Adress": "අංක.756\/සී, යුනිට් 11, ගන්තලාව, කන්තලේ.",
       "NIC": "891444052V",
       "Marks": 65
      },
      {
       "Index": 132,
       "Name": "J.M අදීෂ ලක්ෂිත",
       "Parent": "J.A සුදර්ශනි",
       "Adress": "අංක.06, රජවැව, අග්බෝපුර, කන්තලේ.",
       "NIC": "886834802V",
       "Marks": 85
      },
      {
       "Index": 131,
       "Name": "J විනුත් නේසර",
       "Parent": "J.C ජීවන්ත මෙනඩිස්",
       "Adress": "අංක. 7\/152\/ඒ, 05 වන පටුමග, ලයිට්පාර, කන්තලේ.",
       "NIC": "882181294V",
       "Marks": 81
      },
      {
       "Index": 133,
       "Name": "V.P ඔසඳ නිමාෂ",
       "Parent": "D.P.N ලක්මාලි",
       "Adress": "අංක. 483, ප්‍රියන්ත මාවත, කන්තලේ.",
       "NIC": "V",
       "Marks": 69
      }
     

   
     
    // Add more student objects here
  ];

  // Function to sort students by marks in ascending order
  const sortStudentsByMarks = () => {
    const sortedStudents = [...students].sort((a, b) => a.Marks - b.Marks);
    return sortedStudents;
  };

  // Call the sorting function
  const sortedStudents = sortStudentsByMarks();

  

  return (
    <div style={{ overflowX: 'auto', height: '800px' }}>
    <h1>Students List - Sorted by Marks (Ascending Order)</h1>
    <div style={{ overflowY: 'scroll', height: '800px' }}>
      <table style={{ width: '100%' }}>
        <thead>
          <tr>
            <th>Index</th>
            <th>Name</th>
            <th>Parent</th>
            <th>Address</th>
            <th>NIC</th>
            <th>Marks</th>
          </tr>
        </thead>
        <tbody>
          {sortedStudents.map((student, index) => (
            <tr key={index}>
              <td>{student.Index}</td>
              <td>{student.Name}</td>
              <td>{student.Parent}</td>
              <td>{student.Adress}</td>
              <td>{student.NIC}</td>
              <td>{student.Marks}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
  );
};

export default StudentsPage;
