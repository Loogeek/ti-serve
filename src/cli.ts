// The options the CLI accepts, and how to parse them.
const options = {
  '--help': Boolean,
  '--version': Boolean,
  '--listen': [parseEndpoint] as [typeof parseEndpoint],
  '--single': Boolean,
  '--debug': Boolean,
  '--config': String,
  '--no-clipboard': Boolean,
  '--no-compression': Boolean,
  '--no-etag': Boolean,
  '--symlinks': Boolean,
  '--cors': Boolean,
  '--no-port-switching': Boolean,
  '--ssl-cert': String,
  '--ssl-key': String,
  '--ssl-pass': String,
  // A list of aliases for the above options.
  '-h': '--help',
  '-v': '--version',
  '-l': '--listen',
  '-s': '--single',
  '-d': '--debug',
  '-c': '--config',
  '-n': '--no-clipboard',
  '-u': '--no-compression',
  '-S': '--symlinks',
  '-C': '--cors',

  // The `-p` option is deprecated and is kept only for backwards-compatibility.
  '-p': '--listen',
};
