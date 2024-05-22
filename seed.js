const mongoose = require('mongoose');
const Dataset = require('./models/datasetModel');

mongoose.connect('mongodb+srv://Prakash:qiPHeJ1OEhvfNxIN@cluster0.bn2zb.mongodb.net/null?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO MONGO CONNECTION ERROR!!!!")
        console.log(err)
    })


const seedData = [
    {
        "Name": "A",
        "Education_Qualification" : "Undergraduate",
        "Gender" : "Male",
        "Community" : "General",
        "Religion" : "Hindu",
        "Exservice_men": "Yes",
        "Disability" : "No",
        "Sports" : "Yes",
        "Annual_Percentage" : "90-100",
        "Income" : "Upto 1.5L",
        "India" : "In",
        "Outcome" : "0"
    },
    {
        "Name": "Ab",
        "Education_Qualification" : "Undergraduate",
        "Gender" : "Male",
        "Community" : "General",
        "Religion" : "Hindu",
        "Exservice_men": "Yes",
        "Disability" : "No",
        "Sports" : "Yes",
        "Annual_Percentage" : "90-100",
        "Income" : "Upto 1.5L",
        "India" : "In",
        "Outcome" : "0"
    },
    {
        "Name": "Abc",
        "Education_Qualification" : "Undergraduate",
        "Gender" : "Male",
        "Community" : "General",
        "Religion" : "Hindu",
        "Exservice_men": "Yes",
        "Disability" : "No",
        "Sports" : "Yes",
        "Annual_Percentage" : "60-70",
        "Income" : "3L to 6L",
        "India" : "In",
        "Outcome" : "0"
    },
    {
        "Name": "Abcd",
        "Education_Qualification" : "Doctrate",
        "Gender" : "Female",
        "Community" : "General",
        "Religion" : "Hindu",
        "Exservice_men": "Yes",
        "Disability" : "No",
        "Sports" : "Yes",
        "Annual_Percentage" : "80-90",
        "Income" : "Upto 1.5L",
        "India" : "In",
        "Outcome" : "0"
    },
    {
        "Name": "Abcde",
        "Education_Qualification" : "Postgraduate",
        "Gender" : "Male",
        "Community" : "General",
        "Religion" : "Hindu",
        "Exservice_men": "Yes",
        "Disability" : "No",
        "Sports" : "Yes",
        "Annual_Percentage" : "90-100",
        "Income" : "3L to 6L",
        "India" : "In",
        "Outcome" : "0"
    },
    {
        "Name": "A",
        "Education_Qualification" : "Undergraduate",
        "Gender" : "Male",
        "Community" : "General",
        "Religion" : "Hindu",
        "Exservice_men": "Yes",
        "Disability" : "No",
        "Sports" : "Yes",
        "Annual_Percentage" : "90-100",
        "Income" : "Upto 1.5L",
        "India" : "In",
        "Outcome" : "0"
    },
    {
        "Name": "Ab",
        "Education_Qualification" : "Undergraduate",
        "Gender" : "Male",
        "Community" : "General",
        "Religion" : "Hindu",
        "Exservice_men": "Yes",
        "Disability" : "No",
        "Sports" : "Yes",
        "Annual_Percentage" : "90-100",
        "Income" : "Upto 1.5L",
        "India" : "In",
        "Outcome" : "0"
    },
    {
        "Name": "Abc",
        "Education_Qualification" : "Undergraduate",
        "Gender" : "Male",
        "Community" : "General",
        "Religion" : "Hindu",
        "Exservice_men": "Yes",
        "Disability" : "No",
        "Sports" : "Yes",
        "Annual_Percentage" : "60-70",
        "Income" : "3L to 6L",
        "India" : "In",
        "Outcome" : "0"
    },
    {
        "Name": "Abcd",
        "Education_Qualification" : "Doctrate",
        "Gender" : "Female",
        "Community" : "General",
        "Religion" : "Hindu",
        "Exservice_men": "Yes",
        "Disability" : "No",
        "Sports" : "Yes",
        "Annual_Percentage" : "80-90",
        "Income" : "Upto 1.5L",
        "India" : "In",
        "Outcome" : "0"
    },
    {
        "Name": "Abcde",
        "Education_Qualification" : "Postgraduate",
        "Gender" : "Male",
        "Community" : "General",
        "Religion" : "Hindu",
        "Exservice_men": "Yes",
        "Disability" : "No",
        "Sports" : "Yes",
        "Annual_Percentage" : "90-100",
        "Income" : "3L to 6L",
        "India" : "In",
        "Outcome" : "0"
    },
]


for(let i=0; i<10; i=i+5) {
    let dt = seedData[i].Name;
    console.log(dt);
    seedData[i+0].Name = "INSPIRE Scholarship 2022-23 Scholarship for Higher Education ";
    seedData[i+0].Link = "https://www.online-inspire.gov.in/";
    seedData[i+1].Name = "Nabanna Scholarship";
    seedData[i+1].Link = "http://www.wbcmo.gov.in/";
    seedData[i+2].Name = "Swami Vivekananda Scholarship (SVMCM)";
    seedData[i+2].Link = "https://svmcm.wbhed.gov.in/";;
    seedData[i+3].Name = "Kanyashree Prokalpa";
    seedData[i+3].Link = "https://www.wbkanyashree.gov.in/kp_4.0/index.php";
    seedData[i+4].Name = "Merit cum Men’s Scholarship (Minority)";
    seedData[i+4].Link = "https://www.minorityaffairs.gov.in/show_content.php?lang=1&level=1&ls_id=775&lid=827";
    seedData[i+5].Name = "Paramparik Scholarship";
    seedData[i+5].Link = "https://scholarshiparena.in/paramparik-scholarship/";
    seedData[i+6].Name = "GP Birla Scholarship ";
    seedData[i+6].Link = "https://gpbirlaedufoundation.com/";
    seedData[i+7].Name = "Priyamvada Birla Scholarship ";
    seedData[i+7].Link = "https://www.southpoint.edu.in/priyamvada-birla-scholarship-form/";
    seedData[i+8].Name = "Jagadish Bose Scholarship ";
    seedData[i+8].Link = "https://jbnsts.ac.in/juschprg.php";
    seedData[i+9].Name = "Aalo Scholarship ";
    seedData[i+9].Link = "http://aalo.org.in/scholarship.php";
    seedData[i+10].Name = "Sitaram Jindal Scholarship ";
    seedData[i+10].Link = "https://jgu.edu.in/scholarship-and-education-loan-support/";
    seedData[i+11].Name = "KC Mahindra Scholarship ";
    seedData[i+11].Link = "https://www.kcmet.org/what-we-do-Scholarship-Grants.aspx";
    seedData[i+12].Name = "FAEA Scholarship ";
    seedData[i+12].Link = "https://www.faeaindia.org/StudentInfo.asp";
    seedData[i+13].Name = "Kind Circle Scholarship ";
    seedData[i+13].Link = "https://www.kindcircle.org/";
    seedData[i+14].Name = "Kind Scholarship for Young Women ";
    seedData[i+14].Link = "https://www.kindcircle.org/";
    seedData[i+15].Name = "HDFC Bank ECSS Scholarship ";
    seedData[i+15].Link = "https://www.hdfcbankecss.com/";
    seedData[i+16].Name = "Sahu Jain Trust Scholarship ";
    seedData[i+16].Link = "http://www.sahujaintrust.timesofindia.com/";
    seedData[i+17].Name = "Indian Oil Sports Scholarship ";
    seedData[i+17].Link = "https://iocl.com/pages/Sports-Scholarship-2022";
    seedData[i+18].Name = "Fair & Lovely Scholarship ";
    seedData[i+18].Link = "https://www.glowandlovelycareers.in/en/scholarship-for-women";
    seedData[i+19].Name = "Moulana Aajad National Scholarship ";
    seedData[i+19].Link = "https://www.maef.nic.in/scholarship-scheme";
    seedData[i+20].Name = "Ei Samay Atmadeep Young Scholarship ";
    seedData[i+20].Link = "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.webexam.in/ei-samay-atmadeep-young-scholarship/&ved=2ahUKEwjk6qG-h6GGAxXtiK8BHShhDDgQFnoECA8QAQ&usg=AOvVaw322Z5JG6iXVot82EZ6PG1s";
    seedData[i+21].Name = "Vidyasarathi MPCL Scholarship ";
    seedData[i+21].Link = "https://www.vidyasaarathi.co.in/Vidyasaarathi/";
    seedData[i+22].Name = "Indusland Bank Scholarship ";
    seedData[i+22].Link = "http://www.theindusindfoundation.org/aboutus.html";
    seedData[i+23].Name = "Asia Heart Foundation Scholarship ";
    seedData[i+23].Link = "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.ahf.net.in/images/Scholarship.pdf&ved=2ahUKEwit9Z-DiKGGAxXAk68BHSqBA6oQFnoECCcQAQ&usg=AOvVaw2DiZ1_4C12vqge8cOzzA_d";
    seedData[i+24].Name = "Gourav Foundation Scholarship ";
    seedData[i+24].Link = "https://gauravfoundationgroup.com/";
    seedData[i+25].Name = "GOOGLE Scholarship ";
    seedData[i+25].Link = "https://buildyourfuture.withgoogle.com/scholarships";
    seedData[i+26].Name = "Loreal Foundation Scholarship ";
    seedData[i+26].Link = "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.loreal.com/en/india/articles/commitments/the-india-for-young-women-in-science-scholarship-programme/&ved=2ahUKEwjP-du6iKGGAxWA0DQHHZs8DPQQFnoECBwQAQ&usg=AOvVaw2U_IdXpXc2TalUsXJ4IsNS";
    seedData[i+27].Name = "Swami Dayananda Merit cum Men’s Scholarship ";
    seedData[i+27].Link = "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.swamidayanand.org/scholarship-india&ved=2ahUKEwiH4rfLiKGGAxWms1YBHXbTAS0QFnoECAUQAQ&usg=AOvVaw2opw_vVo-rvzGqD1yVmd0t";
    seedData[i+28].Name = "Scholarship (OASIS) ";
    seedData[i+28].Link = "https://oasis.gov.in/";
    seedData[i+29].Name = "e-Kalyan Scholarship ";
    seedData[i+29].Link = "https://ekalyan.cgg.gov.in/";
    seedData[i+30].Name = "Haryana Scholarship ";
    seedData[i+30].Link = "https://harchhatravratti.highereduhry.ac.in/UserLogin"
    seedData[i+31].Name = "Merit Scholarship ";
    seedData[i+31].Link = "https://scholarships.gov.in/";
    seedData[i+32].Name = "UP Scholarship Form ";
    seedData[i+32].Link = "https://scholarship.up.gov.in/LoginStudentPreRenew.aspx";
    seedData[i+33].Name = "Samunnathi Scholarship ";
    seedData[i+33].Link = "https://www.schemes.kswcfc.org/";
    seedData[i+34].Name = "Vidyadhan Scholarship ";
    seedData[i+34].Link = "https://www.vidyadhan.org/apply";
    seedData[i+35].Name = "Udacity Scholarship ";
    seedData[i+35].Link = "https://auth.udacity.com/sign-in?next=";
    seedData[i+36].Name = "Commonwealth Scholarship ";
    seedData[i+36].Link = "https://www.britishcouncil.in/study-uk/scholarships/commonwealth-scholarships";
    seedData[i+37].Name = "UGC Scholarship – Higher Education ";
    seedData[i+37].Link = "https://www.ugc.gov.in/Home/student_Corner";
    seedData[i+38].Name = "National Fellowship for OBC ";
    seedData[i+38].Link = "https://socialjustice.gov.in/schemes/7";
    seedData[i+39].Name = "Medhavi Scholarship – Digital India Programme ";
    seedData[i+39].Link = "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://medhavionline.org/&ved=2ahUKEwiPxLa2iaGGAxWIs";
    seedData[i+40].Name = "Anant Scholarship ";
    seedData[i+40].Link = "http://www.ananteducation.org/";
    seedData[i+41].Name = "NSF Scholarship ";
    seedData[i+41].Link = "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.northsouth.org/app6/login.aspx&ved=2ahUKEwjVtseDiqGGAxWGsFYBHQNdCmwQFnoECAYQAQ&usg=AOvVaw1PblpEB4s-94UCz1wS6NsM";
    seedData[i+42].Name = "CCRT Scholarship ";
    seedData[i+42].Link = "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://ccrtindia.gov.in/activities/scholarship-schemes/&ved=2ahUKEwiw1P2NiqGGAxVJr1YBHdmiCD8QFnoECAYQAQ&usg=AOvVaw0tYHukDBccWcIH1xVZnfND";
    seedData[i+43].Name = "24th NEST Scholarship 2022 ";
    seedData[i+43].Link = "https://www.nest.net.in/index.html";
    seedData[i+44].Name = "Next Genius Scholarship ";
    seedData[i+44].Link = "https://www.next-genius.com/university-scholarships";
    seedData[i+45].Name = "Joseph Mundassery Scholarship ";
    seedData[i+45].Link = "https://www.scholarship.minoritywelfare.kerala.gov.in/dmw_ma/dmw_ind.php"
    seedData[i+46].Name = "INSPIRE Scholarship ";
    seedData[i+46].Link = "https://www.online-inspire.gov.in/";
    seedData[i+47].Name = "AICTE Pragati Scholarship for Girls ";
    seedData[i+47].Link = "https://portal.aicte-india.org/partnerportal_enu/start.swe?SWECmd=Start&SWEHo=portal.aicte-india.org";
    seedData[i+48].Name = "PM Narendra Modi Scholarship for 12th Pass Students ";
    seedData[i+48].Link = "https://www.myscheme.gov.in/schemes/pmss";
    seedData[i+49].Name = "Ishan Uday Scholarship ";
    seedData[i+49].Link = "https://ner.ugc.ac.in/";
    seedData[i+50].Name = "VIT Scholarship ";
    seedData[i+50].Link = "https://vit.ac.in/applications-open-2024-2025"
    seedData[i+51].Name = "LPU Scholarship ";
    seedData[i+51].Link = "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.lpu.in/scholarship/scholarship.php&ved=2ahUKEwjPxY_biqGGAxWjj68BHQv6ADoQFnoECB4QAQ&usg=AOvVaw03uEBAh5X1x4wa9tUFYtj3";
    seedData[i+52].Name = "Kanya Utthan Yojana ";
    seedData[i+52].Link = "https://medhasoft.bih.nic.in/medhaint2024/(S(cenpmxj01kbbyc2vfmy33vq2))/Register.aspx";
    seedData[i+53].Name = "Atal Bihari Vajpayee Scholarship ";
    seedData[i+53].Link = "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.eoiriyadh.gov.in/page/atal-bihari-vaipayee-general-scholarship-scheme/&ved=2ahUKEwighOv7iqGGAxUdQPUHHeXxBZQQFnoECCsQAQ&usg=AOvVaw27aQseHoVxzqSEu9uSdMzA";
    seedData[i+54].Name = "Post Matric Scholarship ";
    seedData[i+54].Link = "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.pmsonline.bih.nic.in/&ved=2ahUKEwjZhNaLi6GGAxUtjK8BHazHCfEQFnoECAYQAQ&usg=AOvVaw39Ljiyk-ieUi84lxbgGO-e";
    seedData[i+55].Name = "National Talent Search Examination (NTSE) ";
    seedData[i+55].Link = "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://ncert.nic.in/national-talent-examination.php&ved=2ahUKEwj8iJ-Yi6GGAxVhiK8BHSiuCUcQFnoECAUQAQ&usg=AOvVaw3xGLv1hDZ4VV7K4y-V0ytN";
    seedData[i+56].Name = "Jio Scholarship ";
    seedData[i+56].Link = "https://bpm.jio.com/Identity/Sts/Forms/Account/Login?ReturnUrl=%2FIdentity%2Fsts%2FForms%2Fwsfed%3Fwa%3Dwsignin1.0%26wtrealm%3Dhttps%253A%252F%252Fscholarshipapplication.reliancefoundation.org%252FProgrammes%252F%26wctx%3Drm%253D1%2526id%253Dk2passive%2526ru%253D_trust%25252fspauthorize.aspx%25253fsession%25253d3e8538af-e032-4fe7-b091-aad8cacc0c90%252526_spInt%25253d1%26wct%3D2023-10-14T13%253A18%253A29Z%26wreply%3Dhttps%253A%252F%252Fscholarshipapplication.reliancefoundation.org%252FProgrammes%252F&wa=wsignin1.0&wtrealm=https%3A%2F%2Fscholarshipapplication.reliancefoundation.org%2FProgrammes%2F&wctx=rm%3D1%26id%3Dk2passive%26ru%3D_trust%252fspauthorize.aspx%253fsession%253d3e8538af-e032-4fe7-b091-aad8cacc0c90%2526_spInt%253d1&wct=2023-10-14T13%3A18%3A29Z&wreply=https%3A%2F%2Fscholarshipapplication.reliancefoundation.org%2FProgrammes%2F#";
    seedData[i+57].Name = "Vidyadhan Scholarship ";
    seedData[i+57].Link = "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.vidyadhan.org/apply&ved=2ahUKEwif0Pixi6GGAxWjgK8BHdblCEEQFnoECAYQAQ&usg=AOvVaw2yWzewvs_STmPrjxrlxlL6";
    seedData[i+58].Name = "AKASH ANTHE ";
    seedData[i+58].Link = "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.minorityaffairs.gov.in/show_content.php%3Flang%3D2%26level%3D2%26ls_id%3D669%26lid%3D825&ved=2ahUKEwik-MDLi6GGAxUVma8BHafTByoQFnoECEwQAQ&usg=AOvVaw1f4Op-2Zdjs9eUHrPWSBw4";
    seedData[i+59].Name = "MOMA Scholarship ";
    seedData[i+59].Link = "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.minorityaffairs.gov.in/show_content.php%3Flang%3D2%26level%3D2%26ls_id%3D669%26lid%3D825&ved=2ahUKEwik-MDLi6GGAxUVma8BHafTByoQFnoECEwQAQ&usg=AOvVaw1f4Op-2Zdjs9eUHrPWSBw4";
    seedData[i+60].Name = "Ujjwal Bhavishya Scholarship ";
    seedData[i+60].Link = "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://ujjwalbhavishya.org/&ved=2ahUKEwihpsrYi6GGAxWCbfUHHWtYDa4QFnoECA0QAQ&usg=AOvVaw00QW_uUXh84VPwNAzSYcrG";
    seedData[i+61].Name = "CH Muhammed Koya Scholarship ";
    seedData[i+61].Link = "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=http://www.minoritywelfare.kerala.gov.in/muslim-girls-scholarship.php&ved=2ahUKEwiC7s_si6GGAxVOh68BHcQ2B-0QFnoECAUQAQ&usg=AOvVaw0LGc1FYPgr8AsQ0zDUBAUW";
    seedData[i+62].Name = "Indira Gandhi Scholarship ";
    seedData[i+62].Link = "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.ugc.gov.in/Scholarships/stu_Scholarship4&ved=2ahUKEwjn2tmAjKGGAxXldvUHHduGDfwQFnoECCoQAQ&usg=AOvVaw2935PwZgCLmEl1laNprgQv";
    seedData[i+63].Name = "Kalpana Chawla Scholarship – Meritorious Girl Students ";
    seedData[i+63].Link = "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.india.gov.in/information-kalpana-chawla-chhatravriti-yojna&ved=2ahUKEwiyhOmJjKGGAxVqlK8BHbw7AjoQFnoECD4QAQ&usg=AOvVaw3uVrSGPzZTFznxnCFXjxD3";
    seedData[i+64].Name = "CBSE Scholarship ";
    seedData[i+64].Link = "https://www.cbse.gov.in/cbsenew/scholar.html";
    seedData[i+65].Name = "AICTE Pragati Scholarship for Girls ";
    seedData[i+65].Link = "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.aicte-india.org/downloads/About%2520the%2520Scheme_ps_16.pdf&ved=2ahUKEwihouGjjKGGAxUbgK8BHR6QCVUQFnoECDEQAQ&usg=AOvVaw0MfhCU3AYskN4bvG5W5k0l";
    seedData[i+66].Name = "Maulana Azad Scholarship ";
    seedData[i+66].Link = "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.minorityaffairs.gov.in/show_content.php%3Flang%3D1%26level%3D1%26ls_id%3D625%26lid%3D107%23:~:text%3DObjective%253AThe%2520objective%2520of%2520the,D.&ved=2ahUKEwirsMOvjKGGAxURlK8BHYEDAXUQFnoECBUQBQ&usg=AOvVaw3zxK-Ozz8c2-IRiG3CmPLG";
    seedData[i+67].Name = "Ladli Yojana ";
    seedData[i+67].Link = "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://ladlilaxmi.mp.gov.in/&ved=2ahUKEwiPu_y6jKGGAxU0kq8BHRbrDGsQFnoECBkQAQ&usg=AOvVaw0NgZneCVEZAwqFo3dlZ3A6";
    seedData[i+68].Name = "Kanya Utthan Yojana – After Class 12th ";
    seedData[i+68].Link = "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=http://medhasoft.bih.nic.in/&ved=2ahUKEwiG4s_EjKGGAxU-bfUHHcfhAH8QFnoECAUQAQ&usg=AOvVaw35SfmFpngVWeAbIzLWNwVw";
    seedData[i+69].Name = "Vidyasiri Scholarship ";
    seedData[i+69].Link = "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://bcwd.karnataka.gov.in/info-2/Scholarships/Vidyasiri/en&ved=2ahUKEwiGt6vRjKGGAxVXoa8BHeYRA9MQFnoECCQQAQ&usg=AOvVaw08FpcE2Qvu07hJGCXpsekR";
    seedData[i+70].Name = "SSP Scholarship Karnataka ";
    seedData[i+70].Link = "https://ssp.postmatric.karnataka.gov.in/?fbclid=IwAR0LrkVW8J0nD7xAQmIcSJyHDDc5fpKHjXOrBDl_olCva6wuHIsIfDkRFd4";
    seedData[i+71].Name = "Shamanur Shivashankarappa Scholarship ";
    seedData[i+71].Link = "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://forstu.co/sdetails/130&ved=2ahUKEwjyjufujKGGAxW2aPUHHZLABdMQFnoECDUQAQ&usg=AOvVaw2RXxTUPFvoFlmxOuCgdea2";
    seedData[i+72].Name = "Aikyashree Scholarship ";
    seedData[i+72].Link = "https://wbmdfcscholarship.in/aikya_app/home_app.php";
    seedData[i+73].Name = "TSP Scholarship ";
    seedData[i+73].Link = "http://www.tsp.wbmdfc.co.in/";
    seedData[i+74].Name = "LIC Scholarship ";
    seedData[i+74].Link = "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://licindia.in/golden-jubilee-scholarship-scheme&ved=2ahUKEwj0lNm0jaGGAxX3gK8BHcLeB7oQFnoECCIQAQ&usg=AOvVaw2ujwPOan00RqZCn4HJHLgI";
    seedData[i+75].Name = "ADW Scholarship – BackWard Classes ";
    seedData[i+75].Link = "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://tnadtwscholarship.tn.gov.in/&ved=2ahUKEwjv-NrAjaGGAxX0c_UHHQ27AEYQFnoECAcQAQ&usg=AOvVaw30d_S59VV72Th-OGT4hKcR";
    seedData[i+76].Name = "NMMS Scholarship  ";
    seedData[i+76].Link = "https://scholarships.wbsed.gov.in/";
    seedData[i+77].Name = "HP Udaan Scholarship Program ";
    seedData[i+77].Link = "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.hpindiacsr.com/scholarships&ved=2ahUKEwi7s7XYjaGGAxUXcPUHHYg-A1UQFnoECAUQAQ&usg=AOvVaw2pSbmLstsOIk_yJ7cPTsVY";
    seedData[i+78].Name = "Swarnajayanti Fellowship ";
    seedData[i+78].Link = "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://dst.gov.in/scientific-programmes/scientific-engineering-research/human-resource-development-and-nurturing-young-talent-swarnajayanti-fellowships-scheme&ved=2ahUKEwjiub3ljaGGAxX-QfUHHRmbCdMQFnoECBYQAQ&usg=AOvVaw0JRHoCoAJRdcBbCpsAqtLw";
    seedData[i+79].Name = "Junior Research Fellowship ";
    seedData[i+79].Link = "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://csirhrdg.res.in/Home/Index/1/Default/3104/60&ved=2ahUKEwim6pCZjqGGAxUpr1YBHVLkBQ0QFnoECAUQAQ&usg=AOvVaw3SbbhNDy0MBxIo30wZw0RO";
    seedData[i+80].Name = "LAMP Fellowship ";
    seedData[i+80].Link = "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://prsindia.org/lamp&ved=2ahUKEwik4LGojqGGAxUd1DQHHWKCBLwQFnoECAYQAQ&usg=AOvVaw205IKEqfzER1OEE4TQXuT_";
    seedData[i+81].Name = "Young India Fellowship ";
    seedData[i+81].Link = "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.ashoka.edu.in/academic-programme/young-india-fellowship/&ved=2ahUKEwi2iauzjqGGAxWA0DQHHZs8DPQQFnoECAYQAQ&usg=AOvVaw3oUbIR_NtLCrgO8AxkHynd";
    seedData[i+82].Name = "Marie Curie Fellowship ";
    seedData[i+82].Link = "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://marie-sklodowska-curie-actions.ec.europa.eu/actions/postdoctoral-fellowships&ved=2ahUKEwjXzKq-jqGGAxUdplYBHXuGDVAQFnoECAcQAQ&usg=AOvVaw2rmr7mU1K_H0OerpV76YwN";
    seedData[i+83].Name = "Dalai Lama Fellowship ";
    seedData[i+83].Link = "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://cardinalservice.stanford.edu/opportunities/dalai-lama-fellowship-stanford&ved=2ahUKEwjm6O7LjqGGAxWosFYBHadIBCIQFnoECDgQAQ&usg=AOvVaw0t2THmY0t3ehXDA0t1zhM7";
    seedData[i+84].Name = "Clinton Fellowship ";
    seedData[i+84].Link = "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.clintonfoundation.org/programs/general/clinton-global-initiative/fellowship/&ved=2ahUKEwiAit3YjqGGAxXpr1YBHX71C74QFnoECBoQAQ&usg=AOvVaw3fkmuwL9y-VwV5z_eTj-x6";
    seedData[i+85].Name = "INSA Fellowship ";
    seedData[i+85].Link = "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://insaindia.res.in/&ved=2ahUKEwie8o3hjqGGAxUcsFYBHcimCtMQFnoECAUQAQ&usg=AOvVaw1Xu7MY9oe-PoNIvN21EwJC";
    seedData[i+86].Name = "Naropa Fellowship ";
    seedData[i+86].Link = "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=http://www.naropafellowship.org/about-the-fellowship.html&ved=2ahUKEwi7kpjrjqGGAxVPplYBHVf-CbMQFnoECAUQAQ&usg=AOvVaw10VlrQ-ugU-aRkPcor6WLG";
    seedData[i+87].Name = "Shastri Research Student Fellowship ";
    seedData[i+87].Link = "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.shastriinstitute.org/SRSF-Student-2020-21&ved=2ahUKEwiWgJL3jqGGAxV3p1YBHYCNDAkQFnoECB0QAQ&usg=AOvVaw3gV0uckGzPjEAyuHzrzh5C";
    seedData[i+88].Name = "UGC BSR Fellowship ";
    seedData[i+88].Link = "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.ugc.gov.in/pdfnews/9779504_BSR-fellowship.pdf&ved=2ahUKEwj59JaDj6GGAxWasFYBHd2ADPEQFnoECBsQAQ&usg=AOvVaw2psUqvZdAJ5RvdV7xmSGEg";
    seedData[i+89].Name = "Eisenhower Fellowship ";
    seedData[i+89].Link = "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.efworld.org/&ved=2ahUKEwjX3_mNj6GGAxWaklYBHYCXDHoQFnoECBMQAQ&usg=AOvVaw1nOokQW0p3he0-gBhjGzz_";
    seedData[i+90].Name = "Stanford Reliance Dhirubhai Fellowship ";
    seedData[i+90].Link = "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.gsb.stanford.edu/newsroom/school-news/reliance-recommits-mba-fellowship-indian-students&ved=2ahUKEwjym7iaj6GGAxVpqlYBHeCjA3oQFnoECAUQAQ&usg=AOvVaw0l6sZqaVKhmFmQB0XYTTr5";
    seedData[i+91].Name = "Ramalingaswami Re-entry Fellowship ";
    seedData[i+91].Link = "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://rcb.res.in/RRF/&ved=2ahUKEwikj-2rj6GGAxUtsVYBHcycBNAQFnoECAUQAQ&usg=AOvVaw1Z1TD3GPCGKi7umkdHZ5Ku";
    seedData[i+92].Name = "AP Brahmi Pension Scheme ";
    seedData[i+92].Link = "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.andhrabrahmin.ap.gov.in/schemes/schemes.aspx&ved=2ahUKEwjZguK8j6GGAxV3p1YBHXyqAiQQFnoECBwQAQ&usg=AOvVaw0gBXbH2v9_D8WhklgVV-qu";
    seedData[i+93].Name = "CCB Scholarship ";
    seedData[i+93].Link = "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.ccbnic.in/scholarship-scheme&ved=2ahUKEwiW9OPKj6GGAxUtnFYBHdmXCIwQFnoECBMQAQ&usg=AOvVaw2Y-kLT2EIZaxVaYlkzc4Xj";
    seedData[i+94].Name = "Charpak Scholarship ";
    seedData[i+94].Link = "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.inde.campusfrance.org/charpak-scholarships&ved=2ahUKEwi0g5yDkKGGAxVIk1YBHT_TAoAQFnoECAYQAQ&usg=AOvVaw2jQgTv33sdVI4GGU8HEY3R";
    seedData[i+95].Name = "Meghalaya Scholarship ";
    seedData[i+95].Link = "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://megeducation.gov.in/dhte/pages/scholarship_schemes.html&ved=2ahUKEwicxI7Uj6GGAxWKslYBHbMOCPgQFnoECDcQAQ&usg=AOvVaw3utNM0VKvf6qTU1jYkDa9N";
    seedData[i+96].Name = "Teach for India Fellowship ";
    seedData[i+96].Link = "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://apply.teachforindia.org/&ved=2ahUKEwiuoffdj6GGAxWKrlYBHaRXAWAQFnoECAUQAQ&usg=AOvVaw0wcERjXxgh2aEhhvC20FrN";
    seedData[i+97].Name = "PFMS Scholarship ";
    seedData[i+97].Link = "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://pfms.nic.in/scholarship/schemelist.aspx&ved=2ahUKEwiO0J7wj6GGAxUgslYBHa8fDFYQFnoECAcQAQ&usg=AOvVaw2EXCpNdX3HIo4tzq374oN4";
    seedData[i+98].Name = "IFFCO MD scholarship ";
    seedData[i+98].Link = "https://www.learncbse.in/iffco-md-scholarship/#:~:text=IFFCO%20MD%20Scholarship%20Rewards&text=Agriculture%20is%20a%20broad%20field,1%20lakh%20rupees%20of%20scholarship";
    seedData[i+99].Name = "Mizoram Scholarship ";
    seedData[i+99].Link = "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://msb.mizoram.gov.in/&ved=2ahUKEwin1I-skKGGAxVPklYBHeUkBIAQFnoECDYQAQ&usg=AOvVaw1vBbEFTmOiy6Y3WSgDdbAM";
    seedData[i+100].Name = "Subash chandra bose Scholarship ";
    seedData[i+100].Link = "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://scbsf.com/&ved=2ahUKEwilw9bIkKGGAxWer1YBHTSQD9YQFnoECBIQAQ&usg=AOvVaw1YtLdh0iTbh-8fvCZZlZxp";

    
}

// seedData[i+101].Name = "Nabanna Scholarship";
//     seedData[i+102].Name = "Swami Scholarship";
//     seedData[i+103].Name = "Swami Vivekananda Scholarship (SVMCM)";
//     seedData[i+104].Name = "Merit cum Men’s Scholarship (Minority)";
//     seedData[i+105].Name = "PACE Scholarship ";
//     seedData[i+106].Name = "KC Mahindra Scholarship ";
//     seedData[i+107].Name = "Abdul Kalam Scholarship ";
//     seedData[i+108].Name = "Colgate Scholarship ";
//     seedData[i+109].Name = "PMSSS ";
//     seedData[i+110].Name = "Dr. Manmohan Singh Scholarships ";
//     seedData[i+111].Name = "SN BOSE Scholarship ";
//     seedData[i+112].Name = "Tata Scholarship ";
//     seedData[i+113].Name = "Vidya Lakshmi Portal ";
//     seedData[i+114].Name = "Inlaks Scholarship ";
//     seedData[i+115].Name = "Samaj Kalyan Scholarship ";
//     seedData[i+116].Name = "SSO Scholarship ";
//     seedData[i+117].Name = "Azim Premji Fellowship ";
//     seedData[i+118].Name = "CSIR Scholarship ";
//     seedData[i+119].Name = "KIIT Scholarship ";
//     seedData[i+120].Name = "MEA Scholarship ";
//     seedData[i+121].Name = "AFNA Scholarship ";
//     seedData[i+122].Name = "IAFBA Scholarship ";
//     seedData[i+123].Name = "Orange Tulip Scholarship ";
//     seedData[i+124].Name = "Times SPARK Scholarship  ";
//     seedData[i+125].Name = "Babulal Nagarmal Satnalika Foundation Scholarship ";
//     seedData[i+126].Name = "Sahapedia Fellowship ";
//     seedData[i+127].Name = "Gramin Pratibha Khoj Pariksha ";
//     seedData[i+128].Name = "NAROTAM SEKHASRIA Scholarship  ";
//     seedData[i+129].Name = "Deen Dayal SPARSH Yojana  ";
//     seedData[i+130].Name = "Samsung Star Scholarship  ";
//     seedData[i+131].Name = "Siksha Abhiyan Scholarship ";
//     seedData[i+132].Name = "Dr. Ambedkar Scholarship ";
//     seedData[i+133].Name = "Sitaram Jindal Foundation Scholarship ";
//     seedData[i+134].Name = "STS Scholarship ";
//     seedData[i+135].Name = "MHRD Scholarship ";
//     seedData[i+136].Name = "Narendra Modi Education Scholarship ";
//     seedData[i+137].Name = "e-Medhabruthi Scholarship ";
//     seedData[i+138].Name = "Kothari Fellowship ";
//     seedData[i+139].Name = "Central Sector Scholarship ";
//     seedData[i+140].Name = "Vodafone Scholarship ";
//     seedData[i+141].Name = "LIC HFL Vidyadhan Scholarship ";
//     seedData[i+142].Name = "UGAM Scholarship  ";
//     seedData[i+143].Name = "DST Postdoctoral Fellowship ";
//     seedData[i+144].Name = "ICAI Scholarship ";
//     seedData[i+145].Name = "National Talent Search Examination ";
//     seedData[i+146].Name = "Kishore Vaigyanik Protsahan Yojana ";
//     seedData[i+147].Name = "National Scholarship Portal ";
//     seedData[i+148].Name = "National Accounting Talent Search ";
//     seedData[i+149].Name = "E-District Scholarship ";
//     seedData[i+150].Name = "INSA Fellowship ";
//     seedData[i+151].Name = "G. P. Birla Scholarship ";
//     seedData[i+152].Name = "CLP India Scholarship Scheme ";
//     seedData[i+153].Name = "Sitaram Jindal Foundation Scholarship Scheme ";
//     seedData[i+154].Name = "NIU Scholarship cum Admission Test (NSAT) ";
//     seedData[i+155].Name = "Raman Kant Munjal Scholarship ";
//     seedData[i+156].Name = "Dr. Reddy’s Foundation Sashakt Scholarship ";
//     seedData[i+157].Name = "Keep India Smiling Foundational Scholarship Programme ";
//     seedData[i+158].Name = "Prime Minister’s Special Scholarship Scheme (PMSSS), J&K ";
//     eedData[i+158].Link = "https://www.aicte-jk-scholarship-gov.in/"
//     seedData[i+159].Name = "LSAT India Law Scholarship ";
//     seedData[i+160].Name = "Azim Premji University Undergraduate Scholarship ";
//     seedData[i+161].Name = "UPESEAT B.Tech Scholarship, UPES ";
//     seedData[i+162].Name = "MMIT Engineering Scholarship ";
//     seedData[i+163].Name = "All India Youth Scholarship Entrance Examination (AIYSEE) ";
//     seedData[i+164].Name = "KIITEE Merit Scholarship ";
//     seedData[i+165].Name = "National Entrance Screening Test (NEST) ";
//     seedData[i+166].Name = "HP Udaan Scholarship Program ";
//     seedData[i+167].Name = "ONGC Scholarship to Meritorious ";
//     seedData[i+168].Name = "Foundation for Excellence Scholarship ";
//     seedData[i+169].Name = "PMSS Scholarship";
//     seedData[i+170].Name = "Aakash Scholarship ";
//     seedData[i+171].Name = "जनसुनवाई यू पी Edistrict Login ";
//     seedData[i+172].Name = "Maulana Azad Scholarship ";
//     seedData[i+173].Name = "TS Scholarship Status ";
//     seedData[i+174].Name = "MEXT Scholarship ";
//     seedData[i+175].Name = "Post Matric Scholarship Sanctioned ";
//     seedData[i+176].Name = "FIITJEE Scholarship Test ";
//     seedData[i+177].Name = "Fulbright Scholarship ";
//     seedData[i+178].Name = "Minority Scholarship ";
//     seedData[i+179].Name = "Atal Bihari Vajpayee Scholarship ";
//     seedData[i+180].Name = "SSLC Scholarship ";
//     seedData[i+181].Name = "Medhavi Scholarship Form ";
//     seedData[i+182].Name = "Buddy 4 Study Scholarship ";
//     seedData[i+183].Name = "Jnanabhumi Scholarship ";
//     seedData[i+184].Name = "PFMS Scholarship ";
//     seedData[i+185].Name = "Laxmi Charities Scholarship Chennai ";
//     seedData[i+186].Name = "Vidyadhan Scholarship 2024 ";
//     seedData[i+187].Name = "MYSY Scholarship ";
//     seedData[i+188].Name = " Luiss Business School Amsterdam Scholarships ";
//     seedData[i+189].Name = "Bright Minds Scholarship Offered by Sunstone ";
//     seedData[i+190].Name = "GREAT Scholarships India 2024-25 ";
//     seedData[i+191].Name = "Fulbright-Kalam Climate Fellowships for Doctoral Research";
//     seedData[i+192].Name = "Nehru Master’s Fellowships 2025-2026 ";
//     seedData[i+193].Name = "British Council Scholarships For Women In STEM ";
//     seedData[i+194].Name = "CCB Scholarship 2024 ";
//     seedData[i+195].Name = "Muthoot M George Higher Education Scholarship 2023 ";
//     seedData[i+196].Name = "Ashoka University Scholarship";
//     seedData[i+197].Name = "Adobe India Human-in-Technology Scholarship ";
//     seedData[i+199].Name = "Nirankari Rajmata Scholarship Scheme ";
//     seedData[i+198].Name = "Indian Oil Academic Scholarship ";
//     seedData[i+200].Name = "CLP India Scholarship ";
//     seedData[i+201].Name = "Prerna Purva Scholarship";
//     seedData[i+202].Name = "";
//     seedData[i+203].Name = "";
//     seedData[i+204].Name = "";
//     seedData[i+205].Name = " ";
//     seedData[i+206].Name = " ";
//     seedData[i+207].Name = " ";
//     seedData[i+208].Name = " ";
//     seedData[i+209].Name = " ";
//     seedData[i+210].Name = " ";
//     seedData[i+211].Name = " ";
//     seedData[i+212].Name = " ";
//     seedData[i+213].Name = " ";
//     seedData[i+214].Name = " ";
//     seedData[i+215].Name = " ";
//     seedData[i+216].Name = " ";
//     seedData[i+217].Name = " ";
//     seedData[i+218].Name = " ";
//     seedData[i+219].Name = " ";
//     seedData[i+220].Name = " ";
//     seedData[i+221].Name = " ";
//     seedData[i+222].Name = " ";
//     seedData[i+223].Name = " ";
//     seedData[i+224].Name = " ";
//     seedData[i+225].Name = " ";
//     seedData[i+226].Name = " ";
//     seedData[i+227].Name = " ";
//     seedData[i+228].Name = " ";
//     seedData[i+229].Name = " ";
//     seedData[i+230].Name = " ";
//     seedData[i+231].Name = " ";
//     seedData[i+232].Name = " ";
//     seedData[i+233].Name = " ";
//     seedData[i+234].Name = " ";
//     seedData[i+235].Name = " ";
//     seedData[i+236].Name = " ";
//     seedData[i+237].Name = " ";
//     seedData[i+238].Name = " ";
//     seedData[i+239].Name = " ";
//     seedData[i+240].Name = " ";
//     seedData[i+241].Name = " ";
//     seedData[i+242].Name = " ";
//     seedData[i+243].Name = " ";
//     seedData[i+244].Name = " ";
//     seedData[i+245].Name = " ";
//     seedData[i+246].Name = " ";
//     seedData[i+247].Name = " ";
//     seedData[i+248].Name = " ";
//     seedData[i+249].Name = " ";
//     seedData[i+250].Name = " ";
//     seedData[i+251].Name = " ";
//     seedData[i+252].Name = " ";
//     seedData[i+253].Name = " ";
//     seedData[i+254].Name = " ";
//     seedData[i+255].Name = " ";
//     seedData[i+256].Name = " ";
//     seedData[i+257].Name = " ";
//     seedData[i+258].Name = " ";
//     seedData[i+259].Name = " ";
//     seedData[i+260].Name = " ";
//     seedData[i+261].Name = " ";
//     seedData[i+262].Name = " ";
//     seedData[i+263].Name = " ";
//     seedData[i+264].Name = " ";
//     seedData[i+265].Name = " ";
//     seedData[i+266].Name = " ";
//     seedData[i+267].Name = " ";
//     seedData[i+268].Name = " ";
//     seedData[i+269].Name = " ";
//     seedData[i+270].Name = " ";
//     seedData[i+271].Name = " ";
//     seedData[i+272].Name = " ";
//     seedData[i+273].Name = " ";
//     seedData[i+274].Name = " ";
//     seedData[i+275].Name = " ";
//     seedData[i+276].Name = " ";
//     seedData[i+277].Name = " ";
//     seedData[i+278].Name = " ";
//     seedData[i+279].Name = " ";
//     seedData[i+280].Name = " ";
//     seedData[i+281].Name = " ";
//     seedData[i+282].Name = " ";
//     seedData[i+283].Name = " ";
//     seedData[i+284].Name = " ";
//     seedData[i+285].Name = " ";
//     seedData[i+286].Name = " ";
//     seedData[i+287].Name = " ";
//     seedData[i+288].Name = " ";
//     seedData[i+289].Name = " ";
//     seedData[i+290].Name = " ";
//     seedData[i+291].Name = " ";
//     seedData[i+292].Name = " ";
//     seedData[i+293].Name = " ";
//     seedData[i+294].Name = " ";
//     seedData[i+295].Name = " ";
//     seedData[i+296].Name = " ";
//     seedData[i+297].Name = " ";
//     seedData[i+298].Name = " ";
//     seedData[i+299].Name = " ";
//     seedData[i+300].Name = " ";

Dataset.insertMany(seedData).then(res => console.log(res)).catch(e => console.log(e));