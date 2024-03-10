const jobDescriptions = [
    {   // Blank job description
        year: '', 
        title: '', 
        text1: '', 
        text2: '', 
        text3: '',
        active: false
    },
    {
        year: '2018 - 2021',
        title: 'Head of Common Software Foundation (CSF), NOKIA',
        text1: 'Led a SW platform division of ~500 developers located in India, China, Canada, US, Israel, France, Finland, Poland, Hungary, Portugal and Ireland.',
        text2: 'Oversaw architecture and development activities, associated processes, budgets, supplier contracts, operations, external customer and internal marketing.',
        text3: 'Influenced Nokia SW product evolution towards modern cloud native architectures.',
        active: false
    },
    {
        year: '2016 - 2018',
        title: 'CSF Lead Product Manager, NOKIA',
        text1: 'Lead product manager for the Nokia SW CSF solution.',
        text2: 'Worked with Nokia SW R&D product teams (~4000 developers) to ensure adoption of CSF solutions met product requirements.',
        text3: 'Involved in product marketing campaigns with global wireless operators.',
        active: false
    }
];

const expButtonArray = document.getElementsByClassName('experience-background');

const jobDescriptionClear = () => {

    document.getElementById('jd-year').innerHTML = jobDescriptions[0].year;
    document.getElementById('jd-title').innerHTML = jobDescriptions[0].title;
    document.getElementById('jd-text1').style.listStyleType = 'none';
    document.getElementById('jd-text1').innerHTML = jobDescriptions[0].text1;
    document.getElementById('jd-text2').style.listStyleType = 'none';
    document.getElementById('jd-text2').innerHTML = jobDescriptions[0].text2;
    document.getElementById('jd-text3').style.listStyleType = 'none';
    document.getElementById('jd-text3').innerHTML = jobDescriptions[0].text3;
    jobDescriptions.forEach((element) => element.active = false);
    for (let i = 0; i < expButtonArray.length; i++) {
        expButtonArray[i].style.backgroundColor = 'hsla(263, 80%, 95%, 100%)';
    };
};
    
const jobTitleClick = (index) => {
    if (jobDescriptions[index].active === false) {
        document.getElementById('jd-year').innerHTML = jobDescriptions[index].year;
        document.getElementById('jd-title').innerHTML = jobDescriptions[index].title;
        if (jobDescriptions[index].text1 !== null) {
            document.getElementById('jd-text1').style.listStyleType = 'circle';
            document.getElementById('jd-text1').innerHTML = jobDescriptions[index].text1;
        };                
        if (jobDescriptions[index].text2 !== null) {
            document.getElementById('jd-text2').style.listStyleType = 'circle';
            document.getElementById('jd-text2').innerHTML = jobDescriptions[index].text2;
        };        
        if (jobDescriptions[index].text3 !== null) {
            document.getElementById('jd-text3').style.listStyleType = 'circle';
            document.getElementById('jd-text3').innerHTML = jobDescriptions[index].text3;
        };
        jobDescriptions.forEach((element) => element.active = false);
        jobDescriptions[index].active = true;
        for (let i = 0; i < expButtonArray.length; i++) {
            expButtonArray[i].style.backgroundColor = 'hsla(263, 80%, 95%, 100%)';
        };
        expButtonArray[index-1].style.backgroundColor = 'hsla(180, 80%, 95%, 100%)';
    } else {
        jobDescriptionClear();
    }
};

document.getElementById('job1').addEventListener('click', () => jobTitleClick(1));
document.getElementById('job2').addEventListener('click', () => jobTitleClick(2));