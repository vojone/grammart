const TREE_SITTER_CFG_WASM = "data:application/octet-stream;base64,AGFzbQEAAAAAEAhkeWxpbmsuMAEFoCAEAgABHAZgAX8AYAAAYAJ/fwF/YAF/AX9gAn9/AGAAAX8CWgQDZW52DV9fbWVtb3J5X2Jhc2UDfwADZW52DF9fdGFibGVfYmFzZQN/AANlbnYGbWVtb3J5AgABA2VudhlfX2luZGlyZWN0X2Z1bmN0aW9uX3RhYmxlAXAAAgMGBQEBBQICB0oDEV9fd2FzbV9jYWxsX2N0b3JzAAAXdHJlZV9zaXR0ZXJfZ3JhbW1hcnRjZmcAAhhfX3dhc21fYXBwbHlfZGF0YV9yZWxvY3MAAQkIAQAjAQsCAwQKxhMFAwABC90GAQF/IwBBiB5qIwBBwBBqNgIAIwBBjB5qIwA2AgAjAEGQHmojAEHgCGo2AgAjAEGUHmojAEHAEWo2AgAjAEGYHmojAEHwHmoiADYCACMAQZweaiMAQfAfajYCACMAQaAeaiMAQaAKajYCACMAQaQeaiMAQeAKajYCACMAQageaiMAQcALajYCACMAQaweaiMAQaAMajYCACMAQbAeaiMAQd4MajYCACMAQbQeaiMAQeAMajYCACMAQbgeaiMAQaAOajYCACMAQbweaiMBNgIAIwBBwB5qIwFBAWo2AgAjAEHkHmojAEHgD2o2AgAgACMAQckcajYCACMAQfQeaiMAQbwbajYCACMAQfgeaiMAQfQbajYCACMAQfweaiMAQZocajYCACMAQYAfaiMAQbEcajYCACMAQYQfaiMAQeIaajYCACMAQYgfaiMAQeAaajYCACMAQYwfaiMAQYUcajYCACMAQZAfaiMAQcIcajYCACMAQZQfaiMAQdEcajYCACMAQZgfaiMAQc0cajYCACMAQZwfaiMAQaAdajYCACMAQaAfaiMAQZ4dajYCACMAQaQfaiMAQccbajYCACMAQagfaiMAQYgbajYCACMAQawfaiMAQbYcajYCACMAQbAfaiMAQaYbajYCACMAQbQfaiMAQZ8cajYCACMAQbgfaiMAQd0bajYCACMAQbwfaiMAQeQaajYCACMAQcAfaiMAQZAbajYCACMAQcQfaiMAQecbajYCACMAQcgfaiMAQesbajYCACMAQcwfaiMAQYwcajYCACMAQdAfaiMAQZwbaiIANgIAIwBB1B9qIwBB/xpqNgIAIwBB2B9qIwBBthtqNgIAIwBB3B9qIwBBih1qNgIAIwBB4B9qIwBB0xxqNgIAIwBB5B9qIwBB6hxqNgIAIwBB6B9qIwBB/BxqNgIAIwBB9B9qIwBB+xtqNgIAIwBB+B9qIAA2AgAjAEH8H2ojAEHuGmo2AgAjAEGAIGojAEHVG2o2AgAjAEGEIGojAEHzGmo2AgAjAEGIIGojAEGsHGo2AgAjAEGMIGojAEGlHGo2AgAjAEGQIGojAEHOG2o2AgAjAEGUIGojAEGVHGo2AgAjAEGYIGojAEH/G2o2AgAjAEGcIGojAEGVG2o2AgALCAAjAEHgHWoL4gYBBX8DQCAAKAIAIQJBBiEDIAAgACgCGBEDACEGQQAhBQJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQCABQf//A3EOEgABAgMEBQYUFRYNDg4PEBESEx0LQQAhAyAGDSEDQCACIANBAXQiASMAQbAdamovAQBGDRggA0EQSSEBIANBAmohAyABDQALQQEhA0EGIQEgAkEgRiACQQlrQQVJcg0iQQAhAyACQTBrQQpJDSAgAkFfcUHBAGtBGk8NGwwfC0EAIQMgAkEqRg0dIAJBL0cNGkERIQEMIQtBACEDIAJBKkYNGyACQS9GDRYMGAtBACEDIAJBKkYNGgwXC0EAIQMgAkEuRg0CIAJBMGtBCkkNHAwXCyACQTBrQQpPDRYMFAtBACEDIAYNGyACQQlrIgFBF0tBASABdEGfgIAEcUVyRQRAQQEhA0EGIQEMHQtBDCEBAkAgAkEpaw4HHQYABgABAwILQQQhAQwcC0EFIQEMGwsgAkH7AGsOAwEDAgMLQQEhAQwZC0EIIQEMGAtBCSEBDBcLIAJBMGtBCkkNFCACQV9xQcEAa0EaSQ0TDA8LQQkhAwwICyABIQMMBwtBASEEIABBATsBBCAAIAAoAgwRAABBACEDQQ0hASACQTBrQQpJIAJBwQBrQRpJcg0TQQEhBSACQeEAa0EaSQ0TDA0LIABBDTsBBCAAIAAoAgwRAABBACEDIAJBLkYEQEEBIQRBDyEBDBMLQQEhBCACQTBrQQpJDRAMBgsgAEENOwEEIAAgACgCDBEAAEEBIQQgAkEwa0EKSQ0IDAULQQ4hAwwDCyAAQQ47AQQgACAAKAIMEQAAQQAhA0EBIQRBESEBQQEhBQJAIAJBCmsOBAoQEAoACyACQajAAGtBAkkNAyACDQ8MCQtBACEDDAELQQUhAwsgACADOwEEIAAgACgCDBEAAAtBASEFDAULIwAgAWpBsh1qLwEAIQFBACEDDAoLQRAhAQwJC0EAIQNBDyEBDAgLIAINAwsgBCEFCyAFQQFxDwtBAiEBDAQLQQMhAQwDC0ENIQEMAgtBDiEBDAELQQchAQsgACADIAAoAggRBAAMAAsAC/MFAQN/AkACQAJAAkADQAJAIAAoAgAhAyAAIAAoAhgRAwAaQQghBEEAIQICQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQCABQf//A3EOIgABAgMEBQYHCAkKCwwhDQ4PEBEiEhMUFRYXIxgZGhscHR8kCwJAIANBCWsiAUEXSw0AQQEhAkEBIAF0QZ+AgARxRQ0AQQAhAQweC0EBIQFBACECAkACQAJAAkAgA0HjAGsOBSEnJycBAAsgA0HyAGsOAgECJgtBAiEBDB8LQQMhAQweC0EEIQEMHQsgA0HpAEcNIkEFIQEMHAsgA0HsAEcNIUEGIQEMGwsgA0HnAEYEQEEHIQEMGwsgA0H1AEcNIEEIIQEMGgtBCSEBAkAgA0HxAGsOBBogIAAgC0EKIQEMGQsgA0HyAEcNHkELIQEMGAsgA0HvAEcNHUEMIQEMFwsgA0HiAEcNHEENIQEMFgsgA0HsAEcNG0EOIQEMFQsgA0H1AEcNGkEPIQEMFAsgA0HhAEcNGUEQIQEMEwsgA0HjAEcNGEERIQEMEgsgA0HiAEcNF0ESIQEMEQsgA0HlAEcNFkETIQEMEAsgA0HhAEcNFUEUIQEMDwsgA0HyAEcNFEEVIQEMDgsgA0HsAEcNE0EWIQEMDQsgA0HhAEcNEkEXIQEMDAsgA0HyAEcNEUEYIQEMCwsgA0H0AEcNEEEZIQEMCgsgA0HlAEcND0EaIQEMCQsgA0HsAEcNDkEbIQEMCAsgA0HlAEcNDUEcIQEMBwsgA0HzAEcNDEEdIQEMBgtBAiEEDAoLQQchBAwJCyADQegARw0JQR4hAQwDCyADQeEARw0IQR8hAQwCCyADQfAARw0HQSAhAQwBCyADQeUARw0GQSEhAQsgACACIAAoAggRBAAMAQsLQQMhBAwCC0EKIQQMAQtBBCEECyAAIAQ7AQQgACAAKAIMEQAAQQEhAgsgAgsLpyABACMAC6AgCAADAAEADgALAAEAAQANAAEABgAEAAEAHAAgAAEAFwArAAEAEwAPAAIABwAIABEAAgAVABYACAADAAEADgALAAEAAQARAAEABgAEAAEAHAAgAAEAFwAtAAEAEwAPAAIABwAIABEAAgAVABYABwADAAEADgALAAEAAQATAAEABgAFAAEAHAAgAAEAFwAPAAIABwAIABEAAgAVABYABwADAAEADgAVAAEAAQAYAAEABgAFAAEAHAAgAAEAFwAaAAIABwAIABEAAgAVABYABwADAAEADgAdAAEAAQAgAAEABgAiAAEACgAlAAEADQANAAEAGgAGAAIAGQAdAAcAAwABAA4AKAABAAEAKgABAAYALAABAAoALgABAA0ADQABABoACAACABkAHQAHAAMAAQAOACgAAQABACwAAQAKAC4AAQANADAAAQAGAA0AAQAaAAYAAgAZAB0AAwADAAEADgA0AAEABgAyAAQAAwAHAAgAAQADAAMAAQAOADgAAQAGADYABAADAAcACAABAAQAAwABAA4AOgABAAAAPAABAAQACwACABIAGwADAAMAAQAOAEEAAQAGAD8AAwAHAAgAAQADAAMAAQAOAEMAAgAKAAEARQACAAYADQAEAAMAAQAOAEcAAQAAAEkAAQAEAAsAAgASABsABAADAAEADgBJAAEABABLAAEAAAAVAAIAEgAbAAMAAwABAA4ATQACAAoAAQBPAAIABgANAAMAAwABAA4AUwABAAYAUQADAAcACAABAAQAAwABAA4ASQABAAQAVQABAAAADgACABIAGwADAAMAAQAOAFcAAgAKAAEAWQACAAYADQADAAMAAQAOAF0AAQAGAFsAAwAHAAgAAQAEAAMAAQAOAEkAAQAEAFUAAQAAAAsAAgASABsABAADAAEADgBfAAEADABhAAEADQAXAAEAHgAEAAMAAQAOAGMAAQAMAGUAAQANABcAAQAeAAQAAwABAA4AaAABAAoAagABAA0AEAABABoABAADAAEADgBsAAEABQBuAAEADQAnAAEAFAADAAMAAQAOAHAAAQAFACYAAQAYAAIAAwABAA4AcgACAAAABAADAAMAAQAOAHAAAQAFABQAAQAYAAIAAwABAA4AdAACAAAABAADAAMAAQAOAAkAAQADABIAAQARAAIAAwABAA4AdgACAAAABAADAAMAAQAOAHAAAQAFAAwAAQAYAAIAAwABAA4AeAACAAAABAADAAMAAQAOAHoAAQANABYAAQAeAAIAAwABAA4AfAACAAAABAACAAMAAQAOAH4AAQABAAIAAwABAA4AgAABAAsAAgADAAEADgCCAAEAAwACAAMAAQAOAIQAAQAFAAIAAwABAA4AhgABAAAAAgADAAEADgCIAAEABQACAAMAAQAOAIoAAQAFAAIAAwABAA4AjAABAAYAAgADAAEADgCOAAEAAQACAAMAAQAOAJAAAQAGAAIAAwABAA4AkgABAAkAAAAAAAAAAAAbAAAANgAAAE4AAABmAAAAfQAAAJQAAACrAAAAuAAAAMUAAADTAAAA3wAAAOsAAAD5AAAABwEAABMBAAAfAQAALQEAADkBAABFAQAAUwEAAGABAABtAQAAegEAAIcBAACRAQAAmQEAAKMBAACrAQAAtQEAAL0BAADHAQAAzwEAANkBAADhAQAA6AEAAO8BAAD2AQAA/QEAAAQCAAALAgAAEgIAABkCAAAgAgAAJwIAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQABAAIAAQADAAEABAACAAYAAQAHAAEACAABAAkAAgALAAIADQACAA8AAgARAAIAEwACABUAAwACAAEABQABAAoAAAABAAEABgAAAAoAAgAGAAEACAAAAAgAAAEEAAIABwAAAAIAAQAGAAAAAwADAAYAAQACAAEACQAAAAgAAAEIAAEBBgABAAsAAgADAAQABgABAAsAAgAAAQABAQABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAQABAQABAQABAQABAQABAQABAQABAQABAQABAQABAQABAQABAQABAQAAAAAAAAAAAAAAAAAAAAAAAAEAAgADAAQABQAGAAcACAAJAAoACwAMAA0ADgAPABAAEQASABMAFAAVABYAFwAYABkAGgAbABwAHQAeAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAIAAwAEAAUABgAHAAgACQAKAAsADAANAA4ADwAQABEAEgATABQAFQAWABcAGAAZABoAGwAcAB0AHgAfACAAIQAiACMAJAAlACYAJwAoACkAKgArACwALQAuAAAAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAJAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAoAB4ADwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAwAAAAAAAAABAQAAAAAAAAAAAAABAAAAAQEAAAAAAAABAA8AAAAAAAEBAAAAAAAAAAAaAAAAAAABAQAAAAAAAAAAJAAAAAAAAQAAAAAAAAAAABwAAAAAAAEBAAAAAAAAAAAbAAAAAAABAAAAAAAAAAAAKgAAAAAAAQEAAAAAAAAAACMAAAAAAAEBAAAAAAAAAQETAAAACAACAAAAAAAAAAECHAAAAA0AAAAcAAABAAABAQAAAAAAAAECHAAAAA0AAgAAAAAAAAABAhwAAAANAAAAKgAAAQAAAgAAAAAAAAABAh0AAAAAAAAALgAAAQAAAQEAAAAAAAABAh0AAAAAAAIAAAAAAAAAAQIdAAAAAAAAACUAAAEAAAIBAAAAAAAAAQIdAAAAAAAAAA0AAAEAAAEAAAAAAAAAAAAuAAAAAAABAQAAAAAAAAAACQAAAAAAAQAAAAAAAAAAACUAAAAAAAEBAAAAAAAAAAANAAAAAAABAQAAAAAAAAAACgAAAAAAAQAAAAAAAAABAhgAAAAAAAEBAAAAAAAAAQIYAAAAAAABAAAAAAAAAAEDGAAAAAQAAQEAAAAAAAABAxgAAAAEAAEBAAAAAAAAAQIbAAAAAAACAQAAAAAAAAECGwAAAAAAAAAsAAABAAABAAAAAAAAAAECFgAAAAwAAQEAAAAAAAABAhYAAAAMAAEAAAAAAAAAAQEZAAAAAwABAQAAAAAAAAEBGQAAAAMAAQEAAAAAAAABAw8AAAAAAAEBAAAAAAAAAAAsAAAAAAABAQAAAAAAAAEBDwAAAAAAAQAAAAAAAAABAxkAAAAFAAEBAAAAAAAAAQMZAAAABQABAAAAAAAAAAEBHAAAAAcAAQEAAAAAAAABARwAAAAHAAEBAAAAAAAAAQIPAAAAAAABAAAAAAAAAAEEGgAAAAkAAQEAAAAAAAABBBoAAAAJAAEAAAAAAAAAAQIVAAAACgABAQAAAAAAAAECFQAAAAoAAQEAAAAAAAAAABMAAAAAAAEBAAAAAAAAAAAXAAAAAAABAQAAAAAAAAECHgAAAAAAAgEAAAAAAAABAh4AAAAAAAAAFwAAAQAAAQEAAAAAAAAAACUAAAAAAAEBAAAAAAAAAAAQAAAAAAABAQAAAAAAAAAAAgAAAAAAAQEAAAAAAAAAACkAAAAAAAEBAAAAAAAAAAAHAAAAAAABAQAAAAAAAAEEEgAAAAYAAQEAAAAAAAABAhEAAAACAAEBAAAAAAAAAQYSAAAADwABAQAAAAAAAAEFEgAAAAsAAQEAAAAAAAAAABYAAAAAAAEBAAAAAAAAAQUSAAAADgABAQAAAAAAAAAAHQAAAAAAAQEAAAAAAAAAACIAAAAAAAEBAAAAAAAAAQIQAAAAAQABAQAAAAAAAAAAAwAAAAAAAQEAAAAAAAACAAAAAAAAAAEBAAAAAAAAAQEUAAAAAAABAQAAAAAAAAEBFwAAAAAAAQEAAAAAAAAAACEAAAAAAAEBAAAAAAAAAAAZAAAAAAABAQAAAAAAAAAAHwAAAAAAAQEAAAAAAAAAABgAAAAAAH0AewBydWxlX2RlY2xfYm9keQBlbnRyeV9wb2ludABhcmd1bWVudABjb21tZW50AHJ1bGVfd2VpZ2h0AGFyZ3VtZW50cwBnbG9iYWxfc2V0dGluZ3MAY29sb3IAaWRlbnRpZmllcgBudW1iZXIAc3ltYm9sAGNoYW5uZWwAcnVsZV9kZWNsAG5vbl90ZXJtaW5hbABnbG9iYWwAYXJnAHZhbHVlAHNxdWFyZQB0ZXJtaW5hbF90eXBlAHN0YXJ0c2hhcGUAc2NoZW1lAG5hbWUAcnVsZQBzb3VyY2VfZmlsZQBjaXJjbGUAZW5kAHJnYgA6AHJ1bGVfZGVjbF9ib2R5X3JlcGVhdDEAYXJndW1lbnRzX3JlcGVhdDEAY29sb3JfcmVwZWF0MQBzb3VyY2VfZmlsZV9yZXBlYXQxACkAKAAAAAAAAAAAAAAAAAAAACgACwApAAwALgAFAC8AAQA6AAoAewAIAH0ACQArAAQALQAEAAAAAAAAAAAAAAAAAA4AAAAfAAAAAAAAAA8AAAAAAAAALwAAAAIAAAAQAAAACwAAAAYAAABACAAAAAAAAGAEAADACAAAcA8AAPAPAAAgBQAAYAUAAMAFAAAgBgAAXgYAAGAGAAAgBwAAAAAAAAEAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAHAAAAAAAAAAAAAEkOAAC8DQAA9A0AABoOAAAxDgAAYg0AAGANAAAFDgAAQg4AAFEOAABNDgAAoA4AAJ4OAADHDQAAiA0AADYOAACmDQAAHw4AAN0NAABkDQAAkA0AAOcNAADrDQAADA4AAJwNAAB/DQAAtg0AAIoOAABTDgAAag4AAHwOAAAAAAAAAAAAAPsNAACcDQAAbg0AANUNAABzDQAALA4AACUOAADODQAAFQ4AAP8NAACVDQAA";
