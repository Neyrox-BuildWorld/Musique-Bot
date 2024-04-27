module.exports = {
    clients: {
        token: 'MTIzMDQ2MTQyNjI0MjU1NTkxNA.GQpD85.8CS0RWJFvq6JL9w7UfJNyavYVszcoPNJM7TTis',
        prefix: '/',
        activity: 'discord.gg/emerald',
        name: 'Emerald',
        logo: 'https://cdn.discordapp.com/attachments/1230054136410537984/1231152922767921162/pdp_du_serveur_kestcummu.jpg?ex=662e0282&is=662cb102&hm=ab1c922015253a10b94244e605178375f9e17a8946fe31c4748fe5946f5b6fcb&',
        embedColor: 'Random'
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: 'Role-Name',
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'seek', 'shuffle', 'skip', 'stop', 'volume']
        },
        maxVol: 100,
        loopMessage: false,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};