# ExpressJS - File and Design Pattern

## Penjelasan Ringkas Program
Repositori ini berisi implementasi program untuk pembuatan endpoint CRUD pada table movies, melakukan upload file dengan multer, dan mengakses static file dengan Express. Dikembangkan dengan Design Pattern MVC, program ini memisahkan logika bisnis, akses data, dan tampilan. Teknologi utama yang digunakan termasuk Node.js, Express.js, Multer, dan PostgreSQL.

## Pre-Requisite
- Express JS
- node
- nodemon
- multer

## Cara Menjalankan Program
1. Clone repository ini :
   ``git clone https://github.com/munzayanahusn/restfullAPI-middleware.git``
2. Lakukan setup database dengan meng-import file pada ./config/movies-database.sql
3. Lakukan penyesuaian konfigurasi database pada file ./config/db.js
4. Buka terminal dan arahkan ke directory tempat clone
5. Lakukan instalasi setiap pre-requisite package : ```npm install <package>```
6. Jalankan program : ```npm run start```
7. Lakukan pengujian endpoint melalui browser atau Postman
8. Jika ingin mengupload foto, tambahkan informasi pada Body request dengan format form-data.<br>
   Key = "image"<br>
   Type = File<br>
   Value = Upload foto yang diinginkan

## Kontributor
Husnia Munzayana
