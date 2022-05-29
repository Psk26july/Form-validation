const sys = document.getElementById('sys');
const pipe = document.getElementById('pipe');
const gcs-p = document.getElementById('gcs-p');
const gcs-b = document.getElementById('gcs-b');
const icsf = document.getElementById('icsf');
const gcs-c = document.getElementById('gcs-c');
const run = document.getElementById('run');


form.addEventListener('create', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValid=> {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*))$/;
    return;
}

const validateInputs = () => {
    const sysValue = sys.value.trim();
    const pipeValue = pipe.value.trim();
    const gcs-pValue = gcs-p.value.trim();
    const gcs-bValue = gcs-b.value.trim();
    const icsfValue = icsf.value.trim();
    const gcs-cValue = gcs-c.value.trim();
    const runValue = run .value.trim();

     if(sysValue === '') {
        setError(sys, 'required');
    } else if (isValid(sysValue)) {
        setError(sys, 'No special characters');
    }else if (sysValue.length < 5 ) {
        setError(sys, 'at least 5 character.')
    }else {
        setSuccess(sys);
    }

    if(pipeValue === '') {
        setError(pipe, 'required');
    } else if (isValid(pipeValue)) {
        setError(pipe, 'No special characters');
    } else if (pipeValue.length < 5 ) {
        setError(pipe, 'at least 5 character.')
    }else {
        setSuccess(pipe);
    }

   if(gcs-pValue === '') {
        setError(gcs-p, 'required');
    } else if (isValid(gcs-pValue)) {
        setError(gcs-p, 'No special characters');
    } else if (gcs-pValue.length < 5 ) {
        setError(gcs-p, 'at least 5 character.')
    }else {
        setSuccess(gcs-p);
    }

    if(gcs-bValue === '') {
        setError(gcs-b, 'required');
    } else if (isValid(gcs-bValue)) {
        setError(gcs-b, 'No special characters');
    } else if (gcs-bValue.length < 5 ) {
        setError(gcs-b, 'at least 5 character.')
    }else {
        setSuccess(gcs-b);
    }

    if(icsfValue === '') {
        setError(icsf, 'required');
    } else if (isValid(icsfValue)) {
        setError(icsf, 'No special characters');
    } else if (icsfValue.length < 5 ) {
        setError(icsf, 'at least 5 character.')
    }else {
        setSuccess(icsf);
    }

    if(gcs-cValue === '') {
        setError(gcs-c, 'required');
    } else if (isValid(gcs-cValue)) {
        setError(gcs-c, 'No special characters');
    } else if (gcs-cValue.length < 5 ) {
        setError(gcs-c, 'at least 5 character.')
    }else {
        setSuccess(gcs-c);
    }


    if(runValue === '') {
        setError(run, 'required');
    } else if (isValid(runValue)) {
        setError(run, 'No special characters');
    } else if (runValue.length < 5 ) {
        setError(run, 'at least 5 character.')
    }else {
        setSuccess(run);
    }
};
