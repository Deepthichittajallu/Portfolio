document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".Header-Button");
  const hdr = document.querySelector(".main-header-wrapper");

  btn.addEventListener("click", () => {
    if (window.getComputedStyle(hdr).display === "none") {
      hdr.style.display = "block";
    } else {
      hdr.style.display = "none";
    }
  });
});

const certData = {
  certifications: [
    {
      title: 'Oracle',
      image: './assets/oracle.png',
      description: ['Issued by Oracle Academy', 'Completed in 2025'],
      link: './assets/oracle.pdf',
      btnText: 'View Certificate'
    },
    {
      title: 'Redhat',
      image: './assets/redhat(ss).png',
      description: ['Issued by Oracle Academy', 'Completed in 2025'],
      link: './assets/Redhat.pdf',
      btnText: 'View Certificate'
    },
    {
      title: 'HTML',
      image: './assets/html(cs).png',
      description: ['Issued by Cisco', 'Completed in 2025'],
      link: 'https://www.credly.com/badges/8edb0a9e-9e7d-46fb-9b64-9b6da809919f/public_url',
      btnText: 'View Certificate'
    },
    {
      title: 'CSS',
      image: './assets/css(cs).png',
      description: ['Issued by Cisco', 'Completed in 2025'],
      link: 'https://www.credly.com/badges/c770a91d-2b74-4a0a-b089-2ba3b70c0ed9/public_url',
      btnText: 'View Certificate'
    },
    {
      title: 'Javascript',
      image: './assets/javas.png',
      description: ['Issued by Cisco', 'Completed in 2025'],
      link: 'https://www.credly.com/badges/15996165-2d95-45f5-82f8-8eceba81f508/public_url',
      btnText: 'View Certificate'
    },
  ],
  global: [
    {
      title: 'Oracle',
      image: './assets/oracle.png',
      description: ['Issued by Oracle Academy', 'Completed in 2025'],
      link: './assets/oracle.pdf',
      btnText: 'View Certificate'
    },
    {
      title: 'Redhat',
      image: './assets/redhat(ss).png',
      description: ['Issued by Oracle Academy', 'Completed in 2025'],
      link: './assets/Redhat.pdf',
      btnText: 'View Certificate'
    }
  ],
  badges: [
    {
      title: 'HTML',
      image: './assets/html(cs).png',
      description: ['Issued by Cisco', 'Completed in 2025'],
      link: 'https://www.credly.com/badges/8edb0a9e-9e7d-46fb-9b64-9b6da809919f/public_url',
      btnText: 'View Certificate'
    },
    {
      title: 'CSS',
      image: './assets/css(cs).png',
      description: ['Issued by Cisco', 'Completed in 2025'],
      link: 'https://www.credly.com/badges/c770a91d-2b74-4a0a-b089-2ba3b70c0ed9/public_url',
      btnText: 'View Certificate'
    },
    {
      title: 'Javascript',
      image: './assets/javas.png',
      description: ['Issued by Cisco', 'Completed in 2025'],
      link: 'https://www.credly.com/badges/15996165-2d95-45f5-82f8-8eceba81f508/public_url',
      btnText: 'View Certificate'
    },
    {
      title: 'Python',
      image: './assets/python.png',
      description: ['Issued by Cicco', 'Completed in 2024'],
      link: 'https://www.credly.com/badges/9b7ff53f-42bd-4c36-8b2e-b95a44bff569/public_url',
      btnText: 'View Certificate'
    },
    {
      title: 'OS',
      image: './assets/os.png',
      description: ['Issued by Cicco', 'Completed in 2024'],
      link: 'https://www.credly.com/badges/11cc48df-1230-44b6-be61-58d8e2ca2798/public_url',
      btnText: 'View Certificate'
    }
  ]
};

function renderCerts(category) {
  const container = document.getElementById('certifications-content');
  container.innerHTML = '';

  const certs = certData[category];
  if (!certs || certs.length === 0) {
    container.innerHTML = `<p style="color: white;">No certifications found for "${category}"</p>`;
    return;
  }

  certs.forEach(cert => {
    const card = document.createElement('div');
    card.className = 'skill-card';

    card.innerHTML = `
      <img src="${cert.image}" class="code-img" />
      <div class="overlay">
        <div class="card-content">
          <h3>${cert.title}</h3>
          ${cert.description.map(line => `<p>${line}</p>`).join('')}
          <button class="code-btn">
            <a href="${cert.link}" class="code-btn-link" target="_blank">${cert.btnText}</a>
          </button>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderCerts('certifications');

  document.querySelectorAll('.skill-box a').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelectorAll('.skill-box a').forEach(el => el.classList.remove('active'));
      this.classList.add('active');
      const selected = this.getAttribute('data-cert');
      renderCerts(selected);
    });
  });
});
