// script.js - login behavior (local test)
// Enable the ACCEDI button only when both fields are non-empty; store session and redirect to postlogin.html

(function(){
  const usr = document.getElementById('userid');
  const pwd = document.getElementById('password');
  const btn = document.getElementById('btn-accedi');

  function updateButton(){
    if (!usr || !pwd || !btn) return;
    btn.disabled = !(usr.value.trim() !== '' && pwd.value.trim() !== '');
  }

  if (usr) usr.addEventListener('input', updateButton);
  if (pwd) pwd.addEventListener('input', updateButton);

  if (btn) btn.addEventListener('click', function(){
    if (!usr || !pwd) return;
    if (usr.value.trim() === '' || pwd.value.trim() === '') return;

    // store minimal info (for demo only)
    sessionStorage.setItem('mcp_user', usr.value.trim());
    sessionStorage.setItem('mcp_pwd', pwd.value);

    // simulate small delay then redirect
    btn.textContent = 'Verifico...';
    btn.disabled = true;
    setTimeout(function(){
      window.location.href = 'postlogin.html';
    }, 600);
  });

  // small accessibility: Enter key submits if button enabled
  [usr, pwd].forEach(function(el){
    if (!el) return;
    el.addEventListener('keyup', function(e){
      if (e.key === 'Enter' && !btn.disabled) btn.click();
    });
  });

})();
