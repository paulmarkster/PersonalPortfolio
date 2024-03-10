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
    },
    {
        year: '2008 - 2016',
        title: 'WCDMA Senior Development and Project Manager, NOKIA',
        text1: 'Delivered a world first virtualized radio network controller (RNC).',
        text2: 'Built strong relationships with VMware as a key business partner.',
        text3: '',
        active: false
    },
    {
        year: '2007 - 2008',
        title: 'WiMAX Senior Project Manager, NORTEL',
        text1: 'Project managed the delivery of the first Nortel WiMAX base station (BTS).',
        text2: '',
        text3: '',
        active: false
    },
    {
        year: '2006 - 2007',
        title: 'CDMA 1xEV-DO Senior Project Manager, NORTEL',
        text1: 'Worked closely with an OEM supplier to deliver a world first 2.5G HW solution to the marketplace.',
        text2: 'Developed product plans in conjunction with the OEM vendor.',
        text3: 'Supported product introduction in major US operator networks.',
        active: false
    },
    {
        year: '2000-2006',
        title: 'UMTS (3G) Senior Manager, NORTEL',
        text1: 'Initially worked as an expatriate in Paris, France. Simultaneously led a team of ~25 Ottawa designers in Ottawa and Calgary.',
        text2: 'Delivered world\'s first 3G BTS.',
        text3: 'Delivered next generation RNC.',
        active: false
    },
    {
        year: '1998 - 2000',
        title: 'CDMA (2G) Senior Manager, NORTEL',
        text1: 'Delivered 2G base station.',
        text2: '',
        text3: '',
        active: false
    },
    {
        year: '1989 - 1998',
        title: 'ISDN User Part Developer and Manager, NORTEL',
        text1: 'Developed feature content for Nortel’s Digital Multiplexing Switching System (DMS).',
        text2: 'Progressed from a SW developer role to team manager and then to a leadership role as senior manager.',
        text3: '',
        active: false
    },
    {
        year: '1986 - 1989',
        title: 'Train Control SW Developer, SEL CANADA',
        text1: 'Developed light rain transit SW solutions for Toronto, Vancouver and Detroit LRT systems.',
        text2: '',
        text3: '',
        active: false
    },
    {
        year: '1985 - 1986',
        title: 'Train Control SW Developer, CN RAIL',
        text1: 'Developed main line railway signalling SW solutions.',
        text2: 'Indentified for and participated in a management fast track program.',
        text3: '',
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
    document.getElementById('job-description-outer').style.display = 'none';
};
    
const jobTitleClick = (index) => {
    if (jobDescriptions[index].active === false) {
        document.getElementById('job-description-outer').style.display = 'flex';
        document.getElementById('jd-year').innerHTML = jobDescriptions[index].year;
        document.getElementById('jd-title').innerHTML = jobDescriptions[index].title;
        if (jobDescriptions[index].text1 !== '') {
            document.getElementById('jd-text1').style.listStyleType = 'circle';
            document.getElementById('jd-text1').innerHTML = jobDescriptions[index].text1;
        } else {
            document.getElementById('jd-text1').style.listStyleType = 'none';
            document.getElementById('jd-text1').innerHTML = jobDescriptions[0].text1;
        };                
        if (jobDescriptions[index].text2 !== '') {
            document.getElementById('jd-text2').style.listStyleType = 'circle';
            document.getElementById('jd-text2').innerHTML = jobDescriptions[index].text2;
        } else {
            document.getElementById('jd-text2').style.listStyleType = 'none';
            document.getElementById('jd-text2').innerHTML = jobDescriptions[0].text2;
        };    
        if (jobDescriptions[index].text3 !== '') {
            document.getElementById('jd-text3').style.listStyleType = 'circle';
            document.getElementById('jd-text3').innerHTML = jobDescriptions[index].text3;
        } else {
            document.getElementById('jd-text3').style.listStyleType = 'none';
            document.getElementById('jd-text3').innerHTML = jobDescriptions[0].text3;
        };
        jobDescriptions.forEach((element) => element.active = false);
        jobDescriptions[index].active = true;
        for (let i = 0; i < expButtonArray.length; i++) {
            expButtonArray[i].style.backgroundColor = 'hsla(263, 80%, 95%, 100%)';
        };
        expButtonArray[index-1].style.backgroundColor = 'hsla(180, 80%, 95%, 100%)';
    } else {
        jobDescriptionClear();
    };
};

document.getElementById('job1').addEventListener('click', () => jobTitleClick(1));
document.getElementById('job2').addEventListener('click', () => jobTitleClick(2));
document.getElementById('job3').addEventListener('click', () => jobTitleClick(3));
document.getElementById('job4').addEventListener('click', () => jobTitleClick(4));
document.getElementById('job5').addEventListener('click', () => jobTitleClick(5));
document.getElementById('job6').addEventListener('click', () => jobTitleClick(6));
document.getElementById('job7').addEventListener('click', () => jobTitleClick(7));
document.getElementById('job8').addEventListener('click', () => jobTitleClick(8));
document.getElementById('job9').addEventListener('click', () => jobTitleClick(9));
document.getElementById('job10').addEventListener('click', () => jobTitleClick(10));