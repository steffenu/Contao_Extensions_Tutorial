https://docs.contao.org/dev/reference/services/#csrftokenmanager

Damit nur Formulare / Post request von der eigenen Webseite
zugelassen werden.


Im formular wird ein token injected

    <!-- contao/templates/ce_example_form_element.html5 -->
    <form>
      <input type="hidden" name="REQUEST_TOKEN" value="<?= $this->token ?>">
      <!-- … -->
    </form>

Dieses wird dann validiert beim Post request.

Somit sind nur Post requests mit gültigen Token zugelassen ;).