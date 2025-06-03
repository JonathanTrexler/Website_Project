document.addEventListener('DOMContentLoaded', function() {
const timelineData = [
    {
        date: 'Dec 2024 - Present',
        title: 'Systems Administrator at State College Area School District',
        // subtitle: 'Jonny is a poopy face',
        description: '• Spearheaded implementation of Duo Security (MFA) for 1300+ faculty and staff following account compromise incidents, restructuring AD OUs and coordinating rollout with support staff.',
        description1: '• Configured and manage Duo Authentication Proxy servers (Ubuntu Linux) to enable LDAP-based MFA for secure access across supported applications and services.',
        description2: '• Respond to and investigate endpoint threats using CrowdStrike Falcon, including real-time detection, triage, and incident remediation.',
        description3: '• Led remediation efforts for security vulnerabilities identified via Tenable Nessus scans and Crowdstrike to strengthen network and endpoint security posture.',
        description4: '• Implemented Fine-Grained Password Policies (FGPP) across faculty, staff, and students to meet NIST-aligned password complexity and rotation standards.',
        description5: '• Investigated PowerSchool SIS data breach; conducted in-depth log analysis across export, runtime, and audit logs, and authored a comprehensive incident report.',
        description6: '• Administer certificate lifecycle management using DigiCert to secure communication channels and ensure proper certificate trust across systems.',
        description7: '• Configured Single Sign-On (SSO) integrations using Microsoft Entra ID (Azure AD) to enhance access security for third-party and internal applications via SAML, OAuth, and OpenID Connect protocols.',
        description8: '• Maintain and manage Veeam Backup & Replication, including encrypted backups, version upgrades, recovery testing, and file/VM restores.',
        description9: '• Provision user accounts and enforce access controls for thousands of users across faculty, staff, and student populations in line with least privilege principles.',
        description10: '• Troubleshoot Group Policy issues affecting security enforcement, drive mappings, and system configurations across domains.',
        description11: '• Serve as the primary escalation point for IT Support Technicians for advanced troubleshooting of security and infrastructure-related issues.',
        description12: '• Deployed and configured IVR for the district’s 3CX phone system to reduce spam and robocalls, greatly improving security of inbound call handling.',
        description13: '• Administer Hyper-V virtual machines for secure application hosting, including isolated environments for 3D printing, Alertus emergency alerting, and other hosted services.',
        description14: '• Manage server patching and compliance via Windows Admin Center to reduce exposure to known vulnerabilities.',
        description15: '• Perform server hardware upgrades and replacements, including installation of iSCSI Host Bus Adapters and file share migration to Lenovo ThinkSystem DG5000.',
        description16: '• Lead hosted application deployments (e.g., Alertus) ensuring secure configurations, access controls, and system availability.',
        description17: '• Install and manage secure network printers using PaperCut to control access and track usage.',
        description18: '• Enforced physical security policies via deployment of Raptor Visitor Management kiosk across school buildings.',
    },
    {
        date: 'Dec 2023 - Dec 2024',
        title: 'Service Desk Technician at Next7 IT',
        // subtitle: 'Jonny is a poopy face',
        description: '• Serve as the first point of contact for IT-related queries, demonstrating strong problem-solving skills and customer service to resolve issues efficiently and improve user satisfaction.',
        description1: '• Provide comprehensive technical support and troubleshooting for a diverse set of technologies including FortiClient VPN, Fortigate firewalls, Microsoft services and applications, Active Directory, Azure, Unifi switches and access points, Crashplan, and StorageCraft.',
        description2: '• Collaborate closely with IT teams and stakeholders to implement IT solutions and projects, contributing to the continuous improvement of IT services and infrastructure.',
    },
    {
        date: 'June 2023 - Aug 2023',
        title: 'Network Technician Intern at Cove Air LLC',
        // subtitle: '• Install, test, boost, maintain, and troubleshoot various networking equipment including UniFi airMAX PowerBeams, Switches, Access Points, and Cameras/NVRs',
        description: '• Install, test, boost, maintain, and troubleshoot various networking equipment including UniFi airMAX PowerBeams, Switches, Access Points, and Cameras/NVRs',
        description1: '• Manage IP address allocation and subnetting to optimize network resources and ensure proper addressing schemes.'
    },
    {
        date: 'June 2022 - Jul 2023',
        title: 'IT Support Specialist at Penn State University (University Park)',
        // subtitle: '• Serve as the initial point of contact at for individuals seeking assistance with IT issues, including hardware, software, network, and account-related problems.',
        description: '• Serve as the initial point of contact at for individuals seeking assistance with IT issues, including hardware, software, network, and account-related problems.',
        description1: '• Troubleshoot and resolve technical issues, utilizing knowledge bases, documentation, and collaboration with colleagues when necessary.',
        description2: '• Provide technical assistance and maintenance support for computer labs, including printer support.',
        description3: '• Deliver prompt, courteous, and professional customer service to all individuals contacting the service desk, demonstrating empathy and patience in addressing their needs.'
    },
    {
        date: 'Aug 2020 - Aug 2021',
        title: 'IT Service Desk Manager at Penn State University (Altoona)',
        // subtitle: '• Supervise a team of student technicians, providing mentorship, training, and guidance on technical support best practices.',
        description: '• Supervise a team of student technicians, providing mentorship, training, and guidance on technical support best practices.',
        description1: '• Coordinate work schedules, assignments, and priorites to ensure adequate coverage and timely resolution of IT issues.',
        description2: '• Provide technical assistance and maintenance support for computer labs and classrooms, including hardware installation and configuration.',
        description3: '• Assist with troubleshooting and resolving hardware, software, and network related problems for students, faculty, and staff.'
    },
    {
        date: 'Aug 2019 - Aug 2020',
        title: 'IT Service Desk Consultant at Penn State University (Altoona)',
        // subtitle: '• Served as the initial point of contact for students, facutly, and staff seeking assistance with IT issues.',
        description: '• Served as the initial point of contact for students, facutly, and staff seeking assistance with IT issues.',
        description1: '• Collaborate with fellow student consultants to coordinate efforts to ensure timely resolution of service requests.',
    }
];

    const timeline = document.getElementById('timeline');

    timelineData.forEach((item, index) => {
        const entry = document.createElement('div');
        entry.classList.add('timeline-entry', 'relative', 'pl-6');
        entry.setAttribute('id', 'entry-' + index);

        const dot = document.createElement('div');
        dot.classList.add('timeline-dot');

        const date = document.createElement('div');
        date.textContent = item.date;
        date.classList.add('timeline-date');

        const content = document.createElement('div');
        content.classList.add('timeline-content', 'rounded-xl', 'bg-slate-800/50', 'p-6', 'backdrop-blur-sm', 'border', 'border-slate-700/50', 'cursor-pointer');

        const title = document.createElement('h3');
        title.textContent = item.title;
        title.classList.add('text-lg', 'font-semibold', 'text-white', 'mb-2');

        const subtitle = document.createElement('h4');
        subtitle.textContent = item.subtitle;
        subtitle.classList.add('text-md', 'text-gray-400', 'mb-2', 'font-bold');

        //Add a read more button on the subtitle
        const readMore = document.createElement('button');
        readMore.textContent = 'Read More';
        readMore.classList.add('text-sm', 'text-gray-400', 'mb-2');
        readMore.addEventListener('click', function() {
            content.classList.toggle('timeline-description', 'space-y-3');
        });

        const descriptionContainer = document.createElement('div');
        descriptionContainer.classList.add('timeline-description', 'space-y-3');
        descriptionContainer.style.maxHeight = '0';
        descriptionContainer.style.opacity = '0';

        // Add all available descriptions
        /*['description', 'description1', 'description2', 'description3'].forEach(descKey => {
            if (item[descKey]) {
                const p = document.createElement('p');
                p.textContent = item[descKey];
                p.classList.add('text-gray-400');
                descriptionContainer.appendChild(p);
            }
        });*/

        Object.keys(item)
            .filter(key => key.startsWith('description'))
            .sort((a, b) => {
                const aNum = parseInt(a.replace('description', '')) || 0;
                const bNum = parseInt(b.replace('description', '')) || 0;
                return aNum - bNum;
            })
            .forEach(descKey => {
                const p = document.createElement('p');
                p.textContent = item[descKey];
                p.classList.add('text-gray-400');
                descriptionContainer.appendChild(p);
            });

        // Add expand/collapse icon
        const icon = document.createElement('div');
        icon.innerHTML = '<svg class="w-5 h-5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>';
        icon.classList.add('text-sky-400', 'absolute', 'right-6', 'top-6');

        // Click event to toggle the description visibility with animation
        entry.addEventListener('click', function() {
            const isExpanded = descriptionContainer.style.maxHeight !== '0px';
            
            // Toggle icon rotation
            icon.querySelector('svg').style.transform = isExpanded ? '' : 'rotate(180deg)';
            
            // Toggle content
            if (isExpanded) {
                descriptionContainer.style.maxHeight = '0';
                descriptionContainer.style.opacity = '0';
                readMore.classList.remove('hidden');
            } else {
                descriptionContainer.style.maxHeight = descriptionContainer.scrollHeight + 'px';
                descriptionContainer.style.opacity = '1';
                readMore.classList.add('hidden');
            }
        });

        content.appendChild(title);
        content.appendChild(subtitle);  
        content.appendChild(readMore);
        content.appendChild(descriptionContainer);
        content.appendChild(icon);

        entry.appendChild(dot);
        entry.appendChild(content);

        timeline.appendChild(entry);
    });
});
