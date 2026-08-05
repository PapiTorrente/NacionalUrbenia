# NacionalUrbenia
Código fuente de la página web de la Magnífica República de Urbenia.

# Tecnologías
Esta página web usa:
- HTML
- CSS
- JavaScript para el funcionamiento del menú.
- Jekyll (por defecto en GitHub Pages) para incrustar el menú dinámicamente en todos los archivos que lo requieran.

# Tecnologías Adicionales (OPCIONALES)
Para hacer pruebas sin subir los cambios a Gihub y que sean publicados en github pages hacemos uso de un
servidor de desarrollo propio de Jekyll, pero para hacer uso de él necesitamos instalar Ruby y Bundler.

Aquí un pequeño tutorial. 
- Ruby - Instalado mediante rbenv:
  -> curl -fsSL https://github.com/rbenv/rbenv-installer/raw/HEAD/bin/rbenv-installer | bash
  -> echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bashrc
  -> echo 'eval "$(rbenv init -)"' >> ~/.bashrc
  -> source ~/.bashrc
  -> rbenv install 3.1.4
  -> rbenv global 3.1.4
- Bundler - Instalado mediante ruby:
  -> gem install bundler
- Luego, instalamos lo que haya en el Gemfile:
  -> bundle install
- Ejecución del servidor:
  -> bundle exec jekyll serve --livereload
