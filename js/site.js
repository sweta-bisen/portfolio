/* site.js — fills the sidebar and the scrolling sections, and highlights the section in view. */

(function () {
  var data = window.PORTFOLIO || {};

  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, function (char) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[char];
    });
  }

  function setText(id, value) {
    var el = document.getElementById(id);
    if (!el) return;
    if (!value) {
      el.hidden = true;
      return;
    }
    el.hidden = false;
    el.textContent = value;
  }

  setText("role", data.role || "");
  setText("tagline", data.tagline || "");

  var about = document.getElementById("about-copy");
  if (about) {
    var aboutHtml = (data.about || []).map(function (paragraph) {
      return "<p>" + escapeHtml(paragraph) + "</p>";
    }).join("");
    if (data.phone) {
      aboutHtml += '<p class="contact-line">' + escapeHtml(data.location || "") +
        (data.location ? " · " : "") +
        '<a href="' + escapeHtml(data.phoneHref || "#") + '">' + escapeHtml(data.phone) + "</a></p>";
    }
    about.innerHTML = aboutHtml;
  }

  var education = document.getElementById("education");
  if (education) {
    education.innerHTML = (data.education || []).map(function (school) {
      return "<p><strong>" + escapeHtml(school.title || "") + "</strong>" +
        escapeHtml(school.detail || "") + "</p>";
    }).join("");
    education.className = education.innerHTML ? "education" : "";
  }

  var skills = document.getElementById("skills");
  if (skills) {
    var skillHtml = (data.skills || []).map(function (group) {
      return "<li><span>" + escapeHtml(group.group || "") + "</span>" +
        escapeHtml((group.items || []).join(", ")) + "</li>";
    }).join("");
    skills.innerHTML = skillHtml ? '<ul class="skill-groups">' + skillHtml + "</ul>" : "";
  }

  function tags(list) {
    return (list || []).map(function (tag) {
      return "<li>" + escapeHtml(tag) + "</li>";
    }).join("");
  }

  function card(item, titleHtml) {
    var points = (item.points || []).map(function (point) {
      return "<li>" + escapeHtml(point) + "</li>";
    }).join("");
    var body = '<div class="card-body"><h3>' + titleHtml + "</h3>" +
      (points ? '<ul class="points">' + points + "</ul>" : "") +
      (item.summary ? '<p class="summary">' + escapeHtml(item.summary) + "</p>" : "") +
      ((item.tags && item.tags.length) ? '<ul class="tags">' + tags(item.tags) + "</ul>" : "") +
      "</div>";
    var dates = '<p class="dates">' + escapeHtml(item.dates || "") + "</p>";
    var inner = dates + body;
    if (item.href) {
      return '<a class="card" href="' + escapeHtml(item.href) + '">' + inner + "</a>";
    }
    return '<div class="card">' + inner + "</div>";
  }

  var experience = document.getElementById("experience-list");
  if (experience) {
    var jobs = (data.experience || []).map(function (job) {
      var title = escapeHtml(job.role || "");
      if (job.org) title += ' <span class="org">· ' + escapeHtml(job.org) + "</span>";
      return "<li>" + card(job, title) + "</li>";
    }).join("");
    experience.innerHTML = jobs || '<li><p class="empty">Roles from the December 2025 resume will be listed here.</p></li>';
  }

  var projects = document.getElementById("project-list");
  if (projects) {
    var items = (data.projects || []).map(function (project) {
      return "<li>" + card(project, escapeHtml(project.title || "")) + "</li>";
    }).join("");
    projects.innerHTML = items || '<li><p class="empty">Projects will be listed here once they are added.</p></li>';
  }

  var icons = {
    email: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5L4 8V6l8 5 8-5z"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V24h-4V8.5zM8.5 8.5h3.8v2.1h.1c.5-1 1.8-2.1 3.8-2.1 4 0 4.8 2.6 4.8 6V24h-4v-7.7c0-1.8 0-4.1-2.5-4.1s-2.9 2-2.9 4V24h-4V8.5z"/></svg>'
  };

  var resume = document.getElementById("resume");
  if (resume && data.resume && data.resume.href) {
    resume.hidden = false;
    resume.href = data.resume.href;
    resume.textContent = data.resume.label || "View résumé";
    resume.target = "_blank";
    resume.rel = "noopener";
  }

  var socials = document.getElementById("socials");
  if (socials) {
    socials.innerHTML = (data.contact || []).map(function (item) {
      if (!item.href || !icons[item.icon]) return "";
      var external = item.href.indexOf("http") === 0;
      return '<a href="' + escapeHtml(item.href) + '" aria-label="' + escapeHtml(item.label || item.href) + '"' +
        (external ? ' target="_blank" rel="noopener"' : "") + ">" + icons[item.icon] + "</a>";
    }).join("");
  }

  var links = Array.prototype.slice.call(document.querySelectorAll(".nav a"));
  var sections = links.map(function (link) {
    return document.querySelector(link.getAttribute("href"));
  }).filter(Boolean);

  function markActive() {
    var marker = window.innerHeight * 0.32;
    var current = sections[0];
    var atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 8;
    if (atBottom && sections.length) {
      current = sections[sections.length - 1];
    } else {
      sections.forEach(function (section) {
        if (section.getBoundingClientRect().top <= marker) current = section;
      });
    }
    links.forEach(function (link) {
      link.classList.toggle("active", link.getAttribute("href") === "#" + current.id);
    });
  }

  if (sections.length) {
    markActive();
    window.addEventListener("scroll", markActive, { passive: true });
  }
})();
