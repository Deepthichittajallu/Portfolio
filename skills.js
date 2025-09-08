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
const tools = [
  {
    "title":"HTML",
  }
]
const skillsData = {
    coding: [
      {
        title: 'Leetcode',
        image: 'https://upload.wikimedia.org/wikipedia/commons/c/c2/LeetCode_Logo_2.png',
        description: ['Solved 400+ problems', 'Highest rating of 1461'],
        link: 'https://leetcode.com/u/Deepthi_Chittajallu/',
        btnText: 'View Profile'
      },
      {
        title: 'Codechef',
        image: 'https://cdn.codechef.com/sites/all/themes/abessive/cc-logo.png',
        description: ['Solved 1100+ problems', 'Highest rating of 1423'],
        link: 'https://www.codechef.com/users/deepthi2403',
        btnText: 'View Profile'
      },
      {
        title: 'HackerRank',
        image: 'https://upload.wikimedia.org/wikipedia/commons/6/65/HackerRank_logo.png',
        description: ['Achieved 7 Badges', '2+ Certifications'],
        link: 'https://www.hackerrank.com/profile/chlakshmideepth1',
        btnText: 'View Profile'
      },
      {
        title: 'Geeks for Geeks',
        image: 'https://upload.wikimedia.org/wikipedia/commons/e/eb/GeeksForGeeks_logo.png',
        description: ['Solved 200+ problems', 'Highest rating of 1724'],
        link: 'https://www.geeksforgeeks.org/user/chlakshmidzjpq/',
        btnText: 'View Profile'
      }
    ],
    frontend: [
      {
        title: 'HTML',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEc9A_S6BPxCDRp5WjMFEfXrpCu1ya2OO-Lw&s',
        description: [],
        link: 'https://www.geeksforgeeks.org/user/chlakshmidzjpq/',
        btnText: 'View Certificate'
      },
      {
        title: 'CSS',
        image: './assets/css.png',
        description: [],
        link: 'https://www.geeksforgeeks.org/user/chlakshmidzjpq/',
        btnText: 'View Certificate'
      },
      {
        title: 'JavaScript',
        image: './assets/js.png',
        description: [],
        link: 'https://www.geeksforgeeks.org/user/chlakshmidzjpq/',
        btnText: 'View Certificate'
      },
      {
        title: 'Bootstrap',
        image: './assets/bootstarp.png',
        description: [],
        link: 'https://www.geeksforgeeks.org/user/chlakshmidzjpq/',
        btnText: 'View Certificate'
      },
      {
        title: 'React',
        image: './assets/react.png',
        description: [],
        link: 'https://www.geeksforgeeks.org/user/chlakshmidzjpq/',
        btnText: 'View Certificate'
      }
    ],
    database: [
      {
        title: 'MySQL',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Sql_data_base_with_logo.png/640px-Sql_data_base_with_logo.png',
        description: ['Experienced in joins, indexing, stored procedures'],
        link: '#',
        btnText: 'View Certificate'
      }
    ],
    tools: [
      {
        title: 'Git & GitHub',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0TLkHZgGiaukgrwZo0niTUPvNRxganER5AA&s',
        description: ['Version control', 'Collaboration workflows'],
        link: 'https://github.com/Deepthichittajallu',
        btnText: 'View Profile'
      },
      {
        title: 'Linux & Redhat',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVm-8cHPLKhsqrjwWSAkhVsImyiXlf08_TEg&s',
        description: ['Linux', 'Explored different OS'],
        link: '#',
        btnText: 'View Certificate'
      }
    ]
  };
  function renderSkills(category) {
      const contentContainer = document.getElementById('skills-content');
    contentContainer.innerHTML = '';
    const skillCards = skillsData[category];
    if (!skillCards || skillCards.length === 0) {
      contentContainer.innerHTML = `<p style="color: white;">No data available for "${category}"</p>`;
      return;
    }

    skillCards.forEach(skill => {
      const card = document.createElement('div');
      card.className = 'skill-card';

      card.innerHTML = `
        <img src="${skill.image}" class="code-img"/>
        <div class="overlay">
          <div class="card-content">
            <h3>${skill.title}</h3>
            ${skill.description.map(line => `<p>${line}</p>`).join('')}
            <button class="code-btn">
              <a href="${skill.link}" class="code-btn-link" target="_blank">${skill.btnText}</a>
            </button>
          </div>
        </div>
      `;

      contentContainer.appendChild(card);
    });
  }
document.addEventListener('DOMContentLoaded', () => {
  renderSkills('coding');
  document.querySelectorAll('.skill-box a').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const selected = this.getAttribute('data-skill');
      renderSkills(selected);
      document.querySelectorAll('.skill-box a').forEach(el => el.classList.remove('active'));
      this.classList.add('active');
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  renderSkills('coding');
  document.querySelectorAll('.skill-box a').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelectorAll('.skill-box a').forEach(el => el.classList.remove('active'));
      this.classList.add('active');
      const selected = this.getAttribute('data-skill');
      renderSkills(selected);
    });
  });
});
