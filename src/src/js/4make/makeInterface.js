// makeInterface.js

function makeInterface()
{
    let mainDiv = ce('div');
    mainDiv.id = 'mainDiv';
    ba(mainDiv);

    //-//

    let subDiv = ce('div');
    subDiv.id = 'subDiv';
    mainDiv.append(subDiv);

    //-//

    let theTitle = ce('a');
    theTitle.id = 'theTitle';
    theTitle.href = 'https://github.com/ChristopherAndrewTopalian/CATopalian_JavaScript_NW.js_System_Info_and_File_System';
    theTitle.target = '_blank';
    theTitle.textContent = 'CATopalian JavaScript NW.js System Info and File System';
    theTitle.style.margin = '4px';
    theTitle.style.fontSize = '15px';
    theTitle.style.fontFamily = 'Arial';
    theTitle.style.fontWeight = 'bold';
    theTitle.style.color = 'rgb(140, 140, 140)';
    theTitle.style.textAlign = 'right';
    theTitle.style.textDecoration = 'none';
    theTitle.style.display = 'block';
    theTitle.style.marginLeft = 'auto';
    subDiv.append(theTitle);

    //-//

    let textDiv = ce('div');
    textDiv.style.display = 'flex';
    textDiv.style.flexDirection = 'column';
    subDiv.append(textDiv);

    //-//

    let textOutput = ce('textarea');
    textOutput.id = 'textOutput';
    textOutput.className = 'textOutput';
    textOutput.style.height = '200';
    textDiv.append(textOutput);

    //-//

    subDiv.append(ce('hr'));

    //-//

    let osAndfsContainer = ce('div');
    osAndfsContainer.style.display = 'flex';
    osAndfsContainer.style.flexDirection = 'row';
    osAndfsContainer.style.gap = 15 + 'px';
    subDiv.append(osAndfsContainer);

    //-//

    let osInfoContainer = ce('div');
    osInfoContainer.style.height = 200 + 'px';
    osInfoContainer.style.border = 'solid 2px rgb(100, 100, 100)';
    osInfoContainer.style.borderRadius = '8px';
    osInfoContainer.style.padding = '10px';
    osInfoContainer.style.display = 'flex';
    osInfoContainer.style.flexDirection = 'column';
    osInfoContainer.style.gap = '5px';
    osInfoContainer.style.overflowY = 'scroll';
    osAndfsContainer.append(osInfoContainer);

    //-//

    let ramButton = ce('button');
    ramButton.textContent = 'os.freemem() / 1024';
    ramButton.onmouseover = function()
    {
        hoverSound();
    };
    ramButton.onclick = function()
    {
        clickSound();
        ge('textOutput').value = os.freemem() / 1024;
    };
    ramButton.style.marginRight = '10px';
    osInfoContainer.append(ramButton);

    //-//

    subDiv.append(ce('hr'));

    //-//

    let homeButton = ce('button');
    homeButton.textContent = 'os.homedir()';
    homeButton.onmouseover = function()
    {
        hoverSound();
    };
    homeButton.onclick = function()
    {
        clickSound();
        ge('textOutput').value = os.homedir();
    };
    homeButton.style.marginRight = '10px';
    osInfoContainer.append(homeButton);

    //-//

    // os.hostname()
    let hostButton = ce('button');
    hostButton.textContent = 'os.hostname()';
    hostButton.onmouseover = function()
    {
        hoverSound();
    };
    hostButton.onclick = function()
    {
        clickSound();
        ge('textOutput').value = os.hostname();
    };
    hostButton.style.marginRight = '10px';
    osInfoContainer.append(hostButton);

    //-//

    // os.type()
    let typeButton = ce('button');
    typeButton.textContent = 'os.type()';
    typeButton.onmouseover = function()
    {
        hoverSound();
    };
    typeButton.onclick = function()
    {
        clickSound();
        ge('textOutput').value = os.type();
    };
    typeButton.style.marginRight = '10px';
    osInfoContainer.append(typeButton);

    //-//

    // os.platform()
    let platformButton = ce('button');
    platformButton.textContent = 'os.platform()';
    platformButton.onmouseover = function()
    {
        hoverSound();
    };
    platformButton.onclick = function()
    {
        clickSound();
        ge('textOutput').value = os.platform();
    };
    platformButton.style.marginRight = '10px';
    osInfoContainer.append(platformButton);

    //-//

    // os.arch()
    let archButton = ce('button');
    archButton.textContent = 'os.arch()';
    archButton.onmouseover = function()
    {
        hoverSound();
    };
    archButton.onclick = function()
    {
        clickSound();
        ge('textOutput').value = os.arch();
    };
    archButton.style.marginRight = '10px';
    osInfoContainer.append(archButton);

    //-//

    // os.release()
    let releaseButton = ce('button');
    releaseButton.textContent = 'os.release()';
    releaseButton.onmouseover = function()
    {
        hoverSound();
    };
    releaseButton.onclick = function()
    {
        clickSound();
        ge('textOutput').value = os.release();
    };
    releaseButton.style.marginRight = '10px';
    osInfoContainer.append(releaseButton);

    //-//

    // os.uptime()
    let uptimeButton = ce('button');
    uptimeButton.textContent = 'os.uptime()';
    uptimeButton.onmouseover = function()
    {
        hoverSound();
    };
    uptimeButton.onclick = function()
    {
        clickSound();
        ge('textOutput').value = os.uptime().toString();
    };
    uptimeButton.style.marginRight = '10px';
    osInfoContainer.append(uptimeButton);

    //-//

    // os.totalmem()
    let totalMemButton = ce('button');
    totalMemButton.textContent = 'os.totalmem()';
    totalMemButton.onmouseover = function()
    {
        hoverSound();
    };
    totalMemButton.onclick = function()
    {
        clickSound();
        ge('textOutput').value = os.totalmem().toString();
    };
    totalMemButton.style.marginRight = '10px';
    osInfoContainer.append(totalMemButton);

    //-//

    // os.freemem()
    let freeMemButton = ce('button');
    freeMemButton.textContent = 'os.freemem()';
    freeMemButton.onmouseover = function()
    {
        hoverSound();
    };
    freeMemButton.onclick = function()
    {
        clickSound();
        ge('textOutput').value = os.freemem().toString();
    };
    freeMemButton.style.marginRight = '10px';
    osInfoContainer.append(freeMemButton);

    //-//

    // os.cpus()
    let cpusButton = ce('button');
    cpusButton.textContent = 'os.cpus()';
    cpusButton.onmouseover = function()
    {
        hoverSound();
    };
    cpusButton.onclick = function()
    {
        clickSound();
        ge('textOutput').value = JSON.stringify(os.cpus(), null, 2);
    };
    cpusButton.style.marginRight = '10px';
    osInfoContainer.append(cpusButton);

    //-//

    // os.constants
    let constantsButton = ce('button');
    constantsButton.textContent = 'os.constants';
    constantsButton.onmouseover = function()
    {
        hoverSound();
    };
    constantsButton.onclick = function()
    {
        clickSound();
        ge('textOutput').value = JSON.stringify(os.constants, null, 2);
    };
    constantsButton.style.marginRight = '10px';
    osInfoContainer.append(constantsButton);

    //-//

    let fsInfoContainer = ce('div');
    fsInfoContainer.style.height = 200 + 'px';
    fsInfoContainer.style.height = 200 + 'px';
    fsInfoContainer.style.border = 'solid 2px rgb(100, 100, 100)';
    fsInfoContainer.style.padding = '10px';
    fsInfoContainer.style.display = 'flex';
    fsInfoContainer.style.flexDirection = 'column';
    fsInfoContainer.style.overflowY = 'scroll';
    fsInfoContainer.style.gap = '5px';
    osAndfsContainer.append(fsInfoContainer);

    //-//

    // FS

    // fs.readFile()
    let readFileButton = ce('button');
    readFileButton.textContent = 'fs.readFile()';
    readFileButton.onmouseover = function()
    {
        hoverSound();
    };
    readFileButton.onclick = function()
    {
        clickSound();
        fs.readFile('example.txt', 'utf8', function(err, data)
        {
            if (err) throw err;
            ge('textOutput').value = data;
        });
    };
    readFileButton.style.marginRight = '10px';
    fsInfoContainer.append(readFileButton);

    //-//

    // fs.writeFile()
    let writeFileButton = ce('button');
    writeFileButton.textContent = 'fs.writeFile()';
    writeFileButton.onmouseover = function()
    {
        hoverSound();
    };
    writeFileButton.onclick = function()
    {
        clickSound();
        fs.writeFile('example.txt', 'Hi Everyone', function(err)
        {
            if (err) throw err;
            ge('textOutput').value = 'File saved!';
        });
    };
    writeFileButton.style.marginRight = '10px';
    fsInfoContainer.append(writeFileButton);

    //-//

    // fs.appendFile()
    let appendFileButton = ce('button');
    appendFileButton.textContent = 'fs.appendFile()';
    appendFileButton.onmouseover = function()
    {
        hoverSound();
    };
    appendFileButton.onclick = function()
    {
        clickSound();
        fs.appendFile('example.txt', '\nHere is an example of Appending text.', function(err)
        {
            if (err) throw err;

            ge('textOutput').value = 'Text appended to file!';
        });
    };
    appendFileButton.style.marginRight = '10px';
    fsInfoContainer.append(appendFileButton);

    //-//

    // fs.rename()
    let renameFileButton = ce('button');
    renameFileButton.textContent = 'fs.rename()';
    renameFileButton.onmouseover = function()
    {
        hoverSound();
    };
    renameFileButton.onclick = function()
    {
        clickSound();
        fs.rename('example.txt', 'newname.txt', function(err)
        {
            if (err) throw err;
            ge('textOutput').value = 'File renamed!';
        });
    };
    renameFileButton.style.marginRight = '10px';
    fsInfoContainer.append(renameFileButton);

    //-//

    // fs.stat()
    let statFileButton = ce('button');
    statFileButton.textContent = 'fs.stat()';
    statFileButton.onmouseover = function()
    {
        hoverSound();
    };
    statFileButton.onclick = function()
    {
        clickSound();
        fs.stat('example.txt', function(err, stats)
        {
            if (err) throw err;
            ge('textOutput').value = JSON.stringify(stats, null, 2);
        });
    };
    statFileButton.style.marginRight = '10px';
    fsInfoContainer.append(statFileButton);

    //-//

    // fs.readdir()
    let readdirButton = ce('button');
    readdirButton.textContent = 'fs.readdir()';
    readdirButton.onmouseover = function()
    {
        hoverSound();
    };
    readdirButton.onclick = function()
    {
        clickSound();

        fs.readdir('.', function(err, files) {
            if (err) throw err;
            ge('textOutput').value = files.join('\n');
        });
    };
    readdirButton.style.marginRight = '10px';
    fsInfoContainer.append(readdirButton);

    //-//

    // fs.mkdir()
    let mkdirButton = ce('button');
    mkdirButton.textContent = 'fs.mkdir()';
    mkdirButton.onmouseover = function()
    {
        hoverSound();
    };
    mkdirButton.onclick = function()
    {
        clickSound();
        fs.mkdir('newDir', function(err)
        {
            if (err) throw err;
            ge('textOutput').value = 'New directory created!';
        });
    };
    mkdirButton.style.marginRight = '10px';
    fsInfoContainer.append(mkdirButton);

    //-//

    // fs.unlink()
    let unlinkFileButton = ce('button');
    unlinkFileButton.textContent = 'fs.unlink()';
    unlinkFileButton.onmouseover = function()
    {
        hoverSound();
    };
    unlinkFileButton.onclick = function()
    {
        clickSound();
        fs.unlink('newname.txt', function(err)
        {
            if (err) throw err;

            ge('textOutput').value = 'File deleted!';
        });
    };

    unlinkFileButton.style.marginRight = '10px';
    fsInfoContainer.append(unlinkFileButton);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

