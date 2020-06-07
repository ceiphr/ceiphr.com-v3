---
title: Ceiphr v0.2.0
date: "2019-06-04T22:40:32.169Z"
featuredImage: ceiphr.png
description: This site has been completely revamped for improved performance with more dynamic content.
---

## Why the update

This website is built with Django, a very powerful framework that is known to be the basis for sites like Instagram and Pinterest. My site merely
showed a couple images and a contact form that sent unauthenticated emails to my inbox. That didn't feel like a good use for Django, especially if I'm hosting this site for a monthly fee. So below are all the new features and tweaks I've made to this site to better leverage the power of Django.

---

### The Blog

This blog has full markdown support with syntax highlighting thanks to mistune, pygments, and [this wonderful tutorial](https://www.ignoredbydinosaurs.com/posts/275-easy-markdown-and-syntax-highlighting-django). Below you will see examples of the markdown and syntaxt highlighting with a monokai theme (because it's the **best**). And if you scroll to the bottom of this page there might be recommendations for the latest articles I've posted.

### Improved Performance

I've also been using Google's [web.dev](https://web.dev/) to better adhere to web standards and generally improve this site's performance.

All images are now properly sized to avoid using extra bandwidth. JazzBand's [Sorl-Thumbnail](https://github.com/jazzband/sorl-thumbnail) Django app allowed me to convert image formats and resize them to better function on mobile devices. But there was one problem, _Apple_ (of course).

Safari doesn't support modern image formats, like Google's WebP, so every image in each Django template had to be rewritten in order for Apple devices to use, the more widely supported, JPEG:

```html
<picture>
  <!-- WebP image -->
  {% thumbnail image_name "120x120" format="WEBP" as webp %}
  <source data-srcset="{{ webp.url }}" type="image/webp" />
  {% endthumbnail %}
  <!-- JPEG fallback image -->
  {% thumbnail image_name "120x120" format="JPEG" as jpeg %}
  <source data-srcset="{{ jpeg.url }}" type="image/jpeg" />
  {% endthumbnail %}
  <img />
</picture>
```

Besides that hiccup in development, this site is by far the fasted one I've built to date with Lighthouse giving this site's front page a [97/100 for performance](https://cdn.ceiphr.io/articles/ceiphr.com-v2/ceiphrcom-lighthouse-report.html).

### Better SEO

Search Engine Optimization allows my site to appear higher in Google search based on the way information is organized and given to web crawlers.

Inorder for web crawlers to establish what pages to look at they visit the [sitemap.xml](/sitemap.xml) for each given site (if it's available). A sitemap shows all the indexed pages on a given website. The sitemap I was initially using on this project was static because pages didn't change, only the contents did (e.g. adding new projects/skills/events). Once the blog was added that system needed to be revamped.

Django comes with a [sitemap framework](https://docs.djangoproject.com/en/2.1/ref/contrib/sitemaps/) by default where I make a basic `sitemaps.py` file and have it talk to `urls.py` to generate a sitemap based on article entries and static pages. Django does a really great job of making this simple and easy to implement since below is **all** of the code I had to write for the sitemap generator:

```python
from django.urls import reverse
from django.contrib.sitemaps import Sitemap
from database.models import Article

# Static pages
class StaticViewSitemap(Sitemap):
    changefreq = 'daily'
    priority = 1.0

    def items(self):
        return ['FrontPage', 'Projects', 'Blog', 'Events', 'Skills', 'Contact']

    def location(self, item):
        return reverse(item)

# Blog articles
class BlogSitemap(Sitemap):
    changefreq = 'never'
    priority = 0.5

    def items(self):
        return Article.objects.all()

    def lastmod(self, obj):
        return obj.modified
```

Metadata has also been reworked. In order to help crawlers and social media sites properly display blog posts the base template needed to be updated to support article metadata. This means that when an article is posted on social media, instead of a plain link, the user gets a rich content widget that displays an article's title, summary and header image. Anything I publish should have a higher average search ranking on Google thanks to thorough metadata for each post and static page.

### Security Hardening

A website is nothing if it's not secure. I don't want my site vandalized nor do I want people getting access to private information such as API keys. So I've tried to maintain a high level of security when it comes to this site and comply with standards pertaining to server and website security.

#### The Server

We're using [Certbot](https://certbot.eff.org/) with [Let's Encrypt](https://letsencrypt.org/) for SSL, so your connection to this site is encrypted. My production NGINX is configured with SSL stapling, session caching (50 minutes) and HSTS (1 year) enabled. All secret and API keys are kept on the production server and are git-ignored so I don't accidently publish them to this project's [Gitlab repository](https://gitlab.com/ceiphr/ceiphr.com). The server also requires a SSH key to login and has brute force protection which blocks multiple connection attempts.

Qualys SSL Labs [gives this site an A+](https://www.ssllabs.com/ssltest/analyze.html?d=ceiphr.com) which means we're safe _for now_.

#### The Django Project

You won't find the admin panel for this site because the URL is a 128 character hash. But if you defy the odds and somehow manage to do that, I'm using [TOTP (Django-OTP)](https://bitbucket.org/psagers/django-otp) and a 128 character password, _so go away_. And of course my passwords are salted and hashed thanks to Django's account management system.

Instead of running Postfix for my email system I've integrated this site with [SendGrid](https://sendgrid.com/) specifically because they authenticate domains and their web API can be used seamlessly with Django. Now if you use this site's contact form it will send you and I a copy of the message via `noreply@mail.ceiphr.com`. Emails are therefore handled securely by SendGrid who also authenticates my mail domain. The headers for both emails also contain a `reply_to` attribute that allows me to reply directly to your email address and for you to directly reply to me so we don't bother our good bot, _noreply_.

### Complying with Standards

I'm slowly moving my naming scheme for python variables over to [PEP8](https://www.python.org/dev/peps/pep-0008/) and my classes/IDs over to [BEM](http://getbem.com/), but renaming anything is annoying and generally leads to a lot of bugs so I will take my sweet time.

Starting with this release I will be basing my changelogs off of [_Keep a Changelog_](https://keepachangelog.com/en/1.0.0/) and adhering to [semantic versioning](https://semver.org/spec/v2.0.0.html) for denoting changes to all of my side projects over at [changelog.ceiphr.com](https://changelog.ceiphr.com/). Below is a changelog of all the significant changes made to this site over the past two weeks using those standards.

## Wrap up

This update makes this site faster and more robust than previous versions while also displaying more dynamic content. Check out [the full changelog](https://changelog.ceiphr.com/4706/ceiphr-com-version-0-2-0-release-notes). In the coming weeks I will be drafting posts for this site that I hope will act as useful tutorials and resources for web development, server management, online privacy and security.

Thank you for reading my first post.
