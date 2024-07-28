Archivos del sitio web https://siguealcongreso.org

### Para ver el sitio web en tu computadora

1. Clona este repositorio

       git clone --recurse-submodules git@github.com:siguealcongreso/sitioweb.git

2. Instala [hugo](https://gohugo.io/) ([Installation](https://gohugo.io/installation/))

3. Corre el servidor de hugo ([Develop and test your site](https://gohugo.io/getting-started/usage/#develop-and-test-your-site))

       cd sitioweb
       hugo server

4. Navega a http://localhost:1313

### Para contribuir al sitio web

1. Copia este repositorio a tu cuenta en GitHub (Crea un fork)

2. Clona de tu repositorio a tu computadora, se crea el remote `origin`:

       git clone --recurse-submodules git@github.com:<tu-usuario>/sitioweb.git

3. Agrega un remote `upstream`:

       git remote add upstream https://github.com/siguealcongreso/sitioweb.git

4. Configura git para hacer pull de `main` en `upstream` y siempre hacer push
a `origin`:

       git config --local branch.main.remote upstream
       git remote set-url --push upstream git@github.com:<tu-usuario>/sitioweb.git-

5. Actualiza la rama `main` de tu repositorio local con los cambios más
recientes del repositorio original:

       git checkout main
       git pull upstream

6. Crea una nueva rama en donde van a ir los cambios en los que trabajes.

       git checkout -b issue-48 main

7. Haz modificaciones

8. Revisa que tus modificaciones cumplen con los *Requerimientos para
los commits* que se describen en la siguiente sección.

9. Realiza uno o más commits en tu computadora

10. Empuja la rama con tus modificaciones a tu repositorio en GitHub

11. Solicita que se incluyan tus cambios (Crea un Pull Request)

12. Una vez que se aprobó el Pull Request, borra la rama del issue:

       git branch -d issue-48

13. Para el siguiente issue a trabajar, regresa al paso 5.

### Requerimientos para los commits

1. Revisa que `git diff --check` no reporte renglones con espacios al
final en los archivos que modificas.

2. No hagas cambios cosméticos en otros renglones del código que no
tienen que ver con lo que estás mejorando.  Modifica solamente los
renglones necesarios para resolver el issue en cuestión.

3. Si estás agregando texto, revisa que cumple con la Ortografía y
Gramática.
