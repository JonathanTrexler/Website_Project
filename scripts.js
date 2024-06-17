document.addEventListener('DOMContentLoaded', function() {
const timelineData = [
    {
        date: 'Dec 2023 - Present',
        title: 'Service Desk Technician at Next7 IT',
        description: '• Serve as the first point of contact for IT-related queries, demonstrating strong problem-solving skills and customer service to resolve issues efficiently and improve user satisfaction.',
        description1: '• Provide comprehensive technical support and troubleshooting for a diverse set of technologies including FortiClient VPN, Fortigate firewalls, Microsoft services and applications, Active Directory, Azure, Unifi switches and access points, Crashplan, and StorageCraft.',
        description2: '• Collaborate closely with IT teams and stakeholders to implement IT solutions and projects, contributing to the continuous improvement of IT services and infrastructure.',
    },
    {
        date: 'June 2023 - Aug 2023',
        title: 'Network Technician Intern at Cove Air LLC',
        description: '• Install, test, boost, maintain, and troubleshoot various networking equipment including UniFi airMAX PowerBeams, Switches, Access Points, and Cameras/NVRs',
        description1: '• Manage IP address allocation and subnetting to optimize network resources and ensure proper addressing schemes.'
    },
    {
        date: 'June 2022 - Jul 2023',
        title: 'IT Support Specialist at Penn State University (University Park)',
        description: '• Serve as the initial point of contact at for individuals seeking assistance with IT issues, including hardware, software, network, and account-related problems.',
        description1: '• Troubleshoot and resolve technical issues, utilizing knowledge bases, documentation, and collaboration with colleagues when necessary.',
        description2: '• Provide technical assistance and maintenance support for computer labs, including printer support.',
        description3: '• Deliver prompt, courteous, and professional customer service to all individuals contacting the service desk, demonstrating empathy and patience in addressing their needs.'
    },
    {
        date: 'Aug 2020 - Aug 2021',
        title: 'IT Service Desk Manager at Penn State University (Altoona)',
        description: '• Supervise a team of student technicians, providing mentorship, training, and guidance on technical support best practices.',
        description1: '• Coordinate work schedules, assignments, and priorites to ensure adequate coverage and timely resolution of IT issues.',
        description2: '• Provide technical assistance and maintenance support for computer labs and classrooms, including hardware installation and configuration.',
        description3: '• Assist with troubleshooting and resolving hardware, software, and network related problems for students, faculty, and staff.'
    },
    {
        date: 'Aug 2019 - Aug 2020',
        title: 'IT Service Desk Consultant at Penn State University (Altoona)',
        description: '• Served as the initial point of contact for students, facutly, and staff seeking assistance with IT issues.',
        description1: '• Collaborate with fellow student consultants to coordinate efforts to ensure timely resolution of service requests.',
    }
];

    const timeline = document.getElementById('timeline');

    timelineData.forEach((item, index) => {
        let entry = document.createElement('div');
        entry.classList.add('timeline-entry');
        entry.setAttribute('id', 'entry-' + index);

        let dot = document.createElement('div');
        dot.classList.add('timeline-dot');

        let date = document.createElement('div');
        date.textContent = item.date;
        date.classList.add('timeline-date');

        let content = document.createElement('div');
        content.classList.add('timeline-content');
        content.setAttribute('id', 'content-' + index);

        let title = document.createElement('h3');
        title.textContent = item.title;

        let description = document.createElement('p');
        description.textContent = item.description;
        description.style.display = 'none'; // Initially hide the description

        let description1 = document.createElement('p');
        description1.textContent = item.description1;
        description1.style.display = 'none'; // Initially hide the description1

        let description2 = document.createElement('p');
        description2.textContent = item.description2;
        description2.style.display = 'none'; // Initially hide the description2

        let description3 = document.createElement('p');
        description3.textContent = item.description3;
        description3.style.display = 'none'; // Initially hide the description3

        // Click event to toggle the description visibility
        entry.addEventListener('click', function() {
            description.style.display = description.style.display === 'none' ? 'block' : 'none';
        });

        // Click event to toggle the description1 visibility
        entry.addEventListener('click', function() {
            description1.style.display = description1.style.display === 'none' ? 'block' : 'none';
        });

        // Click event to toggle the description2 visibility
        entry.addEventListener('click', function() {
            description2.style.display = description2.style.display === 'none' ? 'block' : 'none';
        });

        // Click event to toggle the description3 visibility
        entry.addEventListener('click', function() {
            description3.style.display = description3.style.display === 'none' ? 'block' : 'none';
        });

        content.appendChild(title);
        content.appendChild(description);
        content.appendChild(description1);
        content.appendChild(description2);
        content.appendChild(description3);

        entry.appendChild(dot);
        entry.appendChild(date);
        entry.appendChild(content);

        timeline.appendChild(entry);
    });
});
