import { readdir } from 'fs/promises';
import { join, relative, posix } from 'path';
import { Client } from 'ssh2';

const config = {
  host: '212.85.9.35',
  port: 65002,
  username: 'u833179932',
  password: 'b172026_B',
};

const LOCAL_DIR = './out';
const REMOTE_DIR = '/home/u833179932/domains/klyondigital.com.br/public_html';

async function getAllFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      const sub = await getAllFiles(fullPath);
      files.push(...sub);
    } else {
      files.push(fullPath);
    }
  }
  return files;
}

function uploadFile(sftp, localPath, remotePath) {
  return new Promise((resolve, reject) => {
    sftp.fastPut(localPath, remotePath, (err) => {
      if (err) reject(err);
      else resolve();
    });
  });
}

function mkdirRemote(sftp, dir) {
  return new Promise((resolve) => {
    sftp.mkdir(dir, () => resolve()); // ignore errors (dir may exist)
  });
}

async function deploy() {
  const conn = new Client();

  conn.on('ready', async () => {
    console.log('✅ Conectado ao servidor SSH!');
    conn.sftp(async (err, sftp) => {
      if (err) { console.error('Erro SFTP:', err); conn.end(); return; }

      const files = await getAllFiles(LOCAL_DIR);
      console.log(`📁 ${files.length} arquivos encontrados para upload...\n`);

      // Create all necessary remote directories first
      const dirs = new Set();
      for (const file of files) {
        const rel = relative(LOCAL_DIR, file);
        const parts = rel.split(/[\\/]/);
        parts.pop(); // remove filename
        let acc = REMOTE_DIR;
        for (const part of parts) {
          acc = posix.join(acc, part);
          dirs.add(acc);
        }
      }
      for (const dir of dirs) {
        await mkdirRemote(sftp, dir);
      }

      // Upload all files
      let count = 0;
      for (const file of files) {
        const rel = relative(LOCAL_DIR, file).replace(/\\/g, '/');
        const remotePath = posix.join(REMOTE_DIR, rel);
        try {
          await uploadFile(sftp, file, remotePath);
          count++;
          process.stdout.write(`\r⬆️  Enviando... ${count}/${files.length} — ${rel}`);
        } catch (e) {
          console.error(`\n❌ Erro ao enviar ${rel}:`, e.message);
        }
      }

      console.log(`\n\n🚀 Deploy concluído! ${count}/${files.length} arquivos enviados.`);
      conn.end();
    });
  });

  conn.on('error', (err) => {
    console.error('❌ Erro de conexão:', err.message);
  });

  conn.connect(config);
}

deploy();
