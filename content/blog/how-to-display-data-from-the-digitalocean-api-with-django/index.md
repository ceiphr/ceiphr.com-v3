---
title: How To Display Data from the DigitalOcean API with Django
date: 2019-12-20T23:46:37.121+00:00
featuredImage: do_django.png
description: This tutorial is for leveraging DigitalOcean's API with Django.
redirect: https://www.digitalocean.com/community/tutorials/how-to-display-data-from-the-digitalocean-api-with-django
---

## Introduction

In this tutorial you will build a Django project that will display your DigitalOcean account's Droplet information using the [DigitalOcean v2 API](https://developers.digitalocean.com/documentation/v2/). Specifically, you will be creating a website that will display a table of droplets listing each of their IP addresses, IDs, hosting regions, and resources. Your website will be using [Bulma CSS](https://bulma.io/) to style the page so you can focus on development while also having something nice to looking at in the end. Once you complete this tutorial, you should have a Django project that can produce a web page that looks like this:

![Completed Django Project](part-three-droplet-template.png)
<div class="box has-text-centered">
<a href="https://www.digitalocean.com/community/tutorials/how-to-display-data-from-the-digitalocean-api-with-django">
<button class="button article-cta has-white-text is-primary">Read Tutorial</button>
</a>
</div>

This tutorial was created as a part of DigitalOcean's [Write for DOnations program](https://www.digitalocean.com/write-for-donations/). Article cover photo from DigitalOcean.
