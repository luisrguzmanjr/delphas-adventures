namespace SpriteKind {
    export const Board = SpriteKind.create()
    export const Coral = SpriteKind.create()
}
function setLevel () {
    levelCount = 4
    currentLevel = 1
}
scene.onOverlapTile(SpriteKind.Player, myTiles.tile2, function (sprite, location) {
    tiles.setTileAt(location, myTiles.transparency16)
    score += 2
    music.baDing.play(255)
})
function playLoops () {
    playingMusic = true
    beat = 0
    positions = [0, 0]
}
function giveIntroduction () {
    game.setDialogFrame(img`
        . 6 6 6 6 6 6 6 6 6 6 6 6 6 . . 
        6 6 1 1 1 1 1 1 1 1 1 1 1 6 6 . 
        6 1 1 a a a a a a a a a 1 1 6 . 
        6 1 a a 1 1 1 1 1 1 1 a a 1 6 . 
        6 1 a 1 1 1 1 1 1 1 1 1 a 1 6 . 
        6 1 a 1 1 1 1 1 1 1 1 1 a 1 6 . 
        6 1 a 1 1 1 1 1 1 1 1 1 a 1 6 . 
        6 1 a 1 1 1 1 1 1 1 1 1 a 1 6 . 
        6 1 a 1 1 1 1 1 1 1 1 1 a 1 6 . 
        6 1 a 1 1 1 1 1 1 1 1 1 a 1 6 . 
        6 1 a 1 1 1 1 1 1 1 1 1 a 1 6 . 
        6 1 a a 1 1 1 1 1 1 1 a a 1 6 . 
        6 1 1 a a a a a a a a a 1 1 6 . 
        6 6 1 1 1 1 1 1 1 1 1 1 1 6 6 . 
        . 6 6 6 6 6 6 6 6 6 6 6 6 6 . . 
        . . . . . . . . . . . . . . . . 
        `)
    game.setDialogCursor(img`
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        6 9 9 9 6 6 9 9 9 9 6 6 9 9 9 6 
        6 9 9 6 6 9 9 c c 9 9 6 6 9 9 6 
        6 9 6 6 9 9 c c 6 9 9 9 6 6 9 6 
        6 6 6 9 9 9 9 c 6 6 9 9 9 6 6 6 
        6 6 9 9 9 9 9 9 6 6 9 9 9 9 6 6 
        6 9 9 9 6 6 6 6 9 6 9 9 c 9 9 6 
        6 9 c 6 6 6 9 9 9 6 9 c c c 9 6 
        6 9 c c c 9 6 9 9 9 6 6 6 c 9 6 
        6 9 9 c 9 9 6 9 6 6 6 6 9 9 9 6 
        6 6 9 9 9 9 6 6 9 9 9 9 9 9 6 6 
        6 6 6 9 9 9 6 6 c 9 9 9 9 6 6 6 
        6 9 6 6 9 9 9 6 c c 9 9 6 6 9 6 
        6 9 9 6 6 9 9 c c 9 9 6 6 9 9 6 
        6 9 9 9 6 6 9 9 9 9 6 6 9 9 9 6 
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        `)
    showDialog("Move with the directional pad.")
    showDialog("Use jetpack with the up direction.")
    showDialog("Find all your bot parts to warp to the next level...")
    showDialog("and fix your Mechbot before time runs out.")
    showDialog("Pilot, Sinkhole, be Ready2Robot!")
}
function jumpLeft () {
    playerRight1 = img`
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        .............ddddddd............
        ............ddddddddd...........
        ...........d7d7ddddddd..........
        ...........ddddd7ddddd..........
        ...........7dddddd7ddd..........
        ...........ddddddddd44..........
        ...........ddddffdd4fe..........
        ...........dddf11fd4fe..........
        ...........dddf11fd444..........
        ............dd1111ddd...........
        ............7d1111dd7...........
        ...........f.ffffff.............
        ..........f4.dfddfdd............
        .........f14ddfffdddd...........
        .........f74ddfffdddd...........
        .........f54ddfdffddd...........
        .........f24ddfffdddd...........
        ........f444dddddddd7...........
        .........fffdddddddd7...........
        .........212ddddddd77...........
        .........252.ddddddd............
        ........24442..ffff.............
        ........2442...77777............
        .......2442...7777777...........
        .......222.....7777777...c......
        `
    playerRight1.flipX()
    player.setImage(playerRight1)
}
function setPlayer () {
    player = sprites.create(img`
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        .............ddddddd............
        ............ddddddddd...........
        ...........d7ddddddd7d..........
        ...........dd7ddddd7dd..........
        ...........ddd7ddd7ddd..........
        ...........ddd44444ddd..........
        ...........dd44ff444dd..........
        .........1.dd4ff1f44dd.1........
        .........11dd4feef44dd11........
        ........f111dd4ff44dd111f.......
        .......ff1117ddddddd7111ff......
        .......fffffdfff1fffdfffff......
        ........dd.dddff1ffddd.dd.......
        ........ff.ddddf1fdddd.ff.......
        ........ff.dfdfdddfdfd.ff.......
        .......fff.dffdddddffd.77.......
        ......ffdfddffd777dffdd77.......
        .......fffddfd77777dfddf........
        ..........dddd77777ddddf.f......
        ..........dddf77777fddd.f.......
        ..........ddddddddddddd.........
        ..........fff.......fff.........
        .........7777.......7777........
        ........77777.......77777.......
        .........7777.......7777........
        `, SpriteKind.Player)
    scene.cameraFollowSprite(player)
    controller.moveSprite(player, 100, 100)
    player.setFlag(SpriteFlag.StayInScreen, true)
    player.ay = gravity
    player.z = 5
}
function spawnCoral () {
    for (let value1 of tiles.getTilesByType(sprites.builtin.coral5)) {
        coral = sprites.create(img`
            . . . . . . c c . . . . . c c . 
            . . . c c . c 3 c . c c . c 3 c 
            . . c 3 6 c 3 3 c . c 3 c 6 3 c 
            . . c 3 3 3 3 6 c . c 3 6 3 3 c 
            . . . c 6 3 6 6 c c c 3 3 3 c . 
            . . . . c c 6 6 c 6 c 6 3 3 c . 
            . . . . c 3 c 6 c 3 3 c 6 6 c . 
            c c . c 3 3 c c c c 3 3 c 6 c . 
            c 3 c c 3 6 6 c 3 c 3 6 c 6 c . 
            c 3 3 6 3 6 3 6 3 3 3 c c c c c 
            . c 3 3 3 c 3 3 6 3 6 c c 3 3 c 
            . . c 3 3 c c 3 3 3 6 c 3 3 6 . 
            c c c 6 3 6 c c 6 3 6 6 3 6 c c 
            c 3 3 3 3 3 c c c 3 6 3 3 3 3 c 
            . c c 6 6 3 6 6 c 6 3 3 6 c c . 
            . . . c 6 3 3 6 6 6 6 3 c . . . 
            `, SpriteKind.Coral)
        tiles.placeOnTile(coral, value1)
        animation.runImageAnimation(
        coral,
        [img`
            . . . . . . c c . . . . . c c . 
            . . . c c . c 3 c . c c . c 3 c 
            . . c 3 6 c 3 3 c . c 3 c 6 3 c 
            . . c 3 3 3 3 6 c . c 3 6 3 3 c 
            . . . c 6 3 6 6 c c c 3 3 3 c . 
            . . . . c c 6 6 c 6 c 6 3 3 c . 
            . . . . c 3 c 6 c 3 3 c 6 6 c . 
            c c . c 3 3 c c c c 3 3 c 6 c . 
            c 3 c c 3 6 6 c 3 c 3 6 c 6 c . 
            c 3 3 6 3 6 3 6 3 3 3 c c c c c 
            . c 3 3 3 c 3 3 6 3 6 c c 3 3 c 
            . . c 3 3 c c 3 3 3 6 c 3 3 6 . 
            c c c 6 3 6 c c 6 3 6 6 3 6 c c 
            c 3 3 3 3 3 c c c 3 6 3 3 3 3 c 
            . c c 6 6 3 6 6 c 6 3 3 6 c c . 
            . . . c 6 3 3 6 6 6 6 3 c . . . 
            `,img`
            . . . . . . c c . . . . . c c . 
            . . . c c . c 3 c . c c . c 3 c 
            . . c 3 6 c 3 3 c . c 3 c 6 3 c 
            . . c 3 3 3 3 6 c . c 3 6 3 3 c 
            . . . c 6 3 6 6 c c c 3 3 3 c c 
            . . . . c c 6 6 c 6 c 6 3 3 c c 
            . . . . c 3 c 6 c 3 3 c c 6 c c 
            c c . c 3 3 c c c c 3 c 3 6 c 6 
            c 3 c c 3 6 6 c 3 c 3 c 3 3 c 3 
            c 3 3 6 3 6 3 6 3 3 3 c c 3 6 3 
            . c 3 3 3 c 3 3 6 3 c 6 c 6 3 3 
            . . c 3 3 c c 3 3 3 c 3 3 c 3 6 
            c c c 6 3 6 c c 6 3 6 c 3 3 3 c 
            c 3 3 3 3 3 c c c 3 6 c c 6 3 c 
            . c c 6 6 3 6 6 c 6 3 c 6 6 6 c 
            . . . c 6 3 3 6 6 6 c c 6 6 c c 
            `,img`
            . . . . . . c c . . . . . c c . 
            . . . c c . c 3 c . c c . c 3 c 
            . . c 3 6 c 3 3 c . c 3 c 6 3 c 
            . . c 3 3 3 3 6 c . c 3 6 3 3 c 
            . . . c 6 3 6 6 c c c 3 3 3 c c 
            . . . . c c 6 6 c 6 c 6 3 3 c c 
            . . . . c 3 c 6 c 3 3 c c 6 c c 
            c c . c 3 3 c c c c 3 c 3 6 c 6 
            c 3 c c 3 6 6 c 3 c 3 c 3 3 c 3 
            c 3 3 6 3 6 3 6 3 3 3 c c 3 6 3 
            . c 3 3 3 c 3 3 6 3 c 6 c 6 3 3 
            . . c 3 3 c c 3 3 3 c 3 3 c 3 6 
            c c c 6 3 6 c c 6 3 6 c 3 3 3 c 
            c 3 3 3 3 3 c c c 3 6 c c 6 3 c 
            . c c 6 6 3 6 6 c 6 3 c 6 6 6 c 
            . . . c 6 3 3 6 6 6 c c 6 6 c c 
            `,img`
            . . . . . c c . . . . . . c c . 
            . c c . . c 3 c . . c c . c 3 c 
            . c 3 c c 3 3 c . . c 3 c 6 3 c 
            . c 3 3 c 3 6 c . . c 3 6 3 3 c 
            c c c 6 3 6 6 c . c c 3 3 3 c . 
            3 3 c c 6 6 c 6 c 6 c 6 3 3 c . 
            6 3 3 c c c 3 6 c 3 3 c 6 6 c . 
            3 6 3 3 6 3 3 c c c 3 3 c 6 c . 
            3 c 6 3 3 3 c c 3 c 3 6 c 6 c . 
            c c c 3 3 c 3 6 3 3 3 c c c c c 
            c c c 6 3 c 3 3 6 3 6 c c 3 3 c 
            6 3 c 6 3 6 c 3 3 3 6 c 3 3 6 . 
            6 3 3 6 6 6 3 c 6 3 6 6 3 6 c c 
            c 6 3 3 6 3 c c c 3 6 3 3 3 3 c 
            c c 6 6 6 c c 6 c 6 3 3 6 c c . 
            c c c 6 6 c c 6 6 6 6 3 c . . . 
            `,img`
            . . . . . c c . . . . . . c c . 
            . c c . . c 3 c . . c c . c 3 c 
            . c 3 c c 3 3 c . . c 3 c 6 3 c 
            . c 3 3 c 3 6 c . . c 3 6 3 3 c 
            c c c 6 3 6 6 c . c c 3 3 3 c c 
            3 3 c c 6 6 c 6 c 6 c 6 3 3 c c 
            6 3 3 c c c 3 6 c 3 3 c c 6 c c 
            3 6 3 3 6 3 3 c c c 3 c 3 6 c 6 
            3 c 6 3 3 3 c c 3 c 3 c 3 3 c 3 
            c c c 3 3 c 3 6 3 3 3 c c 3 6 3 
            c c c 6 3 c 3 3 6 3 c 6 c 6 3 3 
            6 3 c 6 3 6 c 3 3 3 c 3 3 c 3 6 
            6 3 3 6 6 6 3 c 6 3 6 c 3 3 3 c 
            c 6 3 3 6 3 c c c 3 6 c c 6 3 c 
            c c 6 6 6 c c 6 c 6 3 c 6 6 6 c 
            c c c 6 6 c c 6 6 6 c c 6 6 c c 
            `],
        500,
        true
        )
        tiles.setTileAt(value1, myTiles.transparency16)
    }
}
function setLevelTileMap (level: number) {
    clearGame()
    myTile = myTiles.transparency16
    if (level == 1) {
        effects.clouds.startScreenEffect()
        scene.setBackgroundImage(img`
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999155511111115555519999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999991551155555551155551999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999915555555555555555555199999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999915555555555555555555199999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999155555555551555555555519999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999155555555555551555555519999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999155555515555555555555519999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999155555555555555555555519999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999155555555555155555555519999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999155555555555555555555519999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999155555555555555555555519999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999155555555555555555555519999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999155555555555555555555519999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999915555555555555555555199999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999915555555555555555555199999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999991555555555555555551999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999155555555555555519999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999915555555555555199999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999991155555555511999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999911111111199999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999e99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            999999999999999999999999999ee999999e9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            999999999999999999999999999eee99999e999999999999e999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            99999999999999999999999999eeeee9999ee9999999999eee99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999eeeeeee999ee9999999999eee99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999e5eeee999e5e999999999eeeee9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            99999999999999999999999999eeeee999eeee99999999eee5ee999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999eeeeeee999ee9999999999eeee9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            99999999999999999999999999eeee5ee99eee9999999eeeeee9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999eeeeee999ee5999999999eeeeee999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            999999999999999999999999ee5eeeee99eeee9999999eeeee5ee99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            99999999999999999999999999eeeeeeeeeeee999999eeeeeee9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999eeeeeeeeeeeeeeeeeee55eeeeee999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999e9999999999eeeeeeeeeeeeeeeeeeeee55eeeeee9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999e999999999999999999
            999999999999eee99999999999eeeeeeeeeeeeeeeeeeeeeee99999999999999999999999999999999999999999999999999999999999999999999999999999999999999e9999ee999999999999999999
            999999999999ee9999999999eeeeeeeeeeeeeeeeeeeeeeeeee9999999999999999999999999999999999e99999999999999999999999999999999999999999999999999ee999ee999999999999999999
            99999999999ee5999999999eeeeeeeeeeeeeeeeeeeeeeeeeeee999999999999999999999999999999999ee9999999999999999999999999999999999999999999999999ee99eee999999999999999999
            9999999999eeeee999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeee99999999999999999999999999999999ee99999999999999999999999999999999999999999999e999eeee9ee5ee9999999999999999
            99999999999e5e99999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee999999999999999999999999999999eeee999999999999999999999999999999999999999999eee99eeee99ee999999999999999999
            999999999999eee999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee99999999999999999999999999999eeee9999e9999999999999999999999999999999999999eee999ee99eeeeee999999999999999
            9999999999eeee99eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee999999999999999999999ee999999e599999e999999999999999999999999999999999999ee5e9eeeeeeeee999999999e99999999
            99999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee9999999999999999999eee9999eeeeee999ee9999999999999999999999999999999999999eee5eeee555ee99999999e99999999
            999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee99999999999999999eeee99999eeee9999ee999999999999999999999999999999999999eee55eeeee55e99999999eeee999999
            999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee999999999999999999eee99995eeee99eee9999999999999e99999999999999999999eeeeeeeeeeeee5e999999999e99999999
            99999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee9999999999999999eeeeee9eeee5eee9eeee99999999999ee999999999999999999999eeeeeeeeeeeeeeeee9999eeee9999999
            9999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee99999999999999eee5ee5eeeeeeeeee5ee999999999999eee9999999999999e99999eeeee55eeeeeeeeeeeee999e5e9999999
            99999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee999999999999999eeeeee55eeee5555eee9999999999eeeee999999999999e9999eeeeeeeeeeeeeeeeeeeeee99eeeee99999
            9999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee9999999999999eeeeee55eeeeee55eee9999999999eeeeeee99999999999ee99999eeeeeeeeeeeeeeeeeeeeeeee5e999999
            999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee99999999999eeeeeeeeeeeeeeeeeeeeeee9999999e5eeee999999999999ee9999eeeeeeeeeeeeeeeeeeeeeeeeee9999999
            99999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee9999999999999eeeeeeeeeeeeeeeeeeeeeee99999eeeee99999999999e5e9999eeeeeeeeeeeeeeeeeeeeeeeeee9999999
            999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee99999999999eeeeeeeeeeeeeeeeeeeeeeeeee99eeeeeee99999999999e9999eeeeeeeeeeeeeeeeeeeeeeeeeeee999999
            99eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee99999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeee5eeee5e9999999999eeee99eeeeeeeeeeeeeeeeeeeeeeeeeeeeee9999
            9eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee99999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee999999999999ee99eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee99
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee999999999ee5eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee9999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee9999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee9999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee9999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            `)
        tiles.setTilemap(tilemap`level`)
        info.startCountdown(45)
        levelScore = 67
        levelTitle = "Mechday, Toolsday!"
    } else if (level == 2) {
        effects.clouds.startScreenEffect()
        scene.setBackgroundImage(img`
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa96669999999666669aaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa9669966666669966669aaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa966966666666666966669aaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa966966666666666966669aaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa96696666666769996966669aaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa96696699966669796966669aaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa96696697966669996966669aaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa96696699966999666966669aaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa96696666666979666966669aaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa96696666666999666966669aaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa96696666666666666966669aaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa96669666666666669666669aaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa96669666666666669666669aaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa966699666666699666669aaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa966666999999966666669aaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa9666666666666666669aaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa96666666666666669aaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa966666666666669aaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa9966666666699aaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa999999999aaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaacaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaccaaaaaacaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaacccaaaaacaaaaaaaaaaaacaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaacccccaaaaccaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaacccccccaaaccaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaac9ccccaaac9caaaaaaaaacccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaacccccaaaccccaaaaaaaaccc9ccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaacccccccaaaccaaaaaaaaaaccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaacccc9ccaacccaaaaaaaccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaccccccaaacc9aaaaaaaaaccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaacc9cccccaaccccaaaaaaaccccc9ccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaccccccccccccaaaaaacccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaccccccccccccccccccc99ccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaacaaaaaaaaaaccccccccccccccccccccc99ccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaacccaaaaaaaaaaacccccccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacaaaaccaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaccaaaaaaaaaaccccccccccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccaaaccaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaacc9aaaaaaaaaccccccccccccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccaacccaaaaaaaaaaaaaaaaaa
            aaaaaaaaaacccccaaaaaacccccccccccccccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacaaaccccacc9ccaaaaaaaaaaaaaaaa
            aaaaaaaaaaac9caaaaaccccccccccccccccccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccaaccccaaccaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaacccaaaccccccccccccccccccccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccccaaaacaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccaaaccaaccccccaaaaaaaaaaaaaaa
            aaaaaaaaaaccccaacccccccccccccccccccccccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaccaaaaaac9aaaaacaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacc9cacccccccccaaaaaaaaacaaaaaaaa
            aaaaaaaaaaacccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaaaaaaaaaaacccaaaaccccccaaaccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccc9cccc999ccaaaaaaaacaaaaaaaa
            aaaaaaaaaaaacccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaaaaaaaaaccccaaaaaccccaaaaccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccc99ccccc99caaaaaaaaccccaaaaaa
            aaaaaaaaaaaaccccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaaaaaaaaaacccaaaa9ccccaacccaaaaaaaaaaaaacaaaaaaaaaaaaaaaaaaaaccccccccccccc9caaaaaaaaacaaaaaaaa
            aaaaaaaaaaacccccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaaaaaaaaccccccacccc9cccaccccaaaaaaaaaaaccaaaaaaaaaaaaaaaaaaaaacccccccccccccccccaaaaccccaaaaaaa
            aaaaaaaaaacccccccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaaaaaaccc9cc9cccccccccc9ccaaaaaaaaaaaacccaaaaaaaaaaaaacaaaaaccccc99cccccccccccccaaac9caaaaaaa
            aaaaaaaaccccccccccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaaaaaaacccccc99cccc9999cccaaaaaaaaaacccccaaaaaaaaaaaacaaaaccccccccccccccccccccccaacccccaaaaa
            aaaaaaaccccccccccccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaaaaacccccc99cccccc99cccaaaaaaaaaacccccccaaaaaaaaaaaccaaaaacccccccccccccccccccccccc9caaaaaa
            aaaaaaccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaaacccccccccccccccccccccccaaaaaaac9ccccaaaaaaaaaaaaccaaaaccccccccccccccccccccccccccaaaaaaa
            aaaaaccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaaaaacccccccccccccccccccccccaaaaacccccaaaaaaaaaaac9caaaaccccccccccccccccccccccccccaaaaaaa
            aaacccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaaaccccccccccccccccccccccccccaacccccccaaaaaaaaaaacaaaaccccccccccccccccccccccccccccaaaaaa
            aacccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaaaaaaacccccccccccccccccccccccccccccc9cccc9caaaaaaaaaaccccaaccccccccccccccccccccccccccccccaaaa
            accccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaaaacccccccccccccccccccccccccccccccccccccaaaaaaaaaaaaccaacccccccccccccccccccccccccccccccccaa
            ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaacccccccccccccccccccccccccccccccccccccccaaaaaaaaacc9cccccccccccccccccccccccccccccccccccccc
            ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaacccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaaccccccccccccccccccccccccccccccccccccccc
            ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaaaaaaccccccccccccccccccccccccccccccccccccccccc
            ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaaacccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            `)
        tiles.setTilemap(tilemap`level_0`)
        info.startCountdown(50)
        levelScore = 51
        levelTitle = "I'm Botman!"
    } else if (level == 3) {
        effects.bubbles.startScreenEffect()
        scene.setBackgroundImage(img`
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            8ccccccc8ccccccc8ccccccc8ccccccc8ccccccc8ccccccc8ccccccc8ccccccc8ccccccc8ccccccc8ccccccc8ccccccc8ccccccc8ccccccc8ccccccc8ccccccc8ccccccc8ccccccc8ccccccc8ccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccc8ccccccc8ccccccc8ccccccc8ccccccc8ccccccc8ccccccc8ccccccc8ccccccc8ccccccc8ccccccc8ccccccc8ccccccc8ccccccc8ccccccc8ccccccc8ccccccc8ccccccc8ccccccc8ccccccc8ccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cc8ccccccc8ccccccc8ccccccc8ccccccc8ccccccc8ccccccc8ccccccc8ccccccc8ccccccc8ccccccc8ccccccc8ccccccc8ccccccc8ccccccc8ccccccc8ccccccc8ccccccc8ccccccc8ccccccc8ccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cc8ccc8ccc8ccc8ccccccc8ccccccc8ccccccc8ccccccc8ccccccc8ccccccc8ccccccc8ccccccc8ccccccc8ccccccc8ccccccc8ccccccc8ccccccc8ccccccc8ccccccc8ccccccc8ccccccc8ccccccc8c
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8c
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8c
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            8c8c8ccc8c8c8ccc8c8c8ccc8c8c8ccc8c8c8ccc8c8c8ccc8c8c8ccc8c8c8ccc8c8c8ccc8c8c8ccc8c8c8ccc8c8c8ccc8c8c8ccc8c8c8ccc8c8c8ccc8c8c8ccc8c8c8ccc8c8c8ccc8c8c8ccc8c8c8ccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8c
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            8ccc8c8c8ccc8c8c8ccc8c8c8ccc8c8c8ccc8c8c8ccc8c8c8ccc8c8c8ccc8c8c8ccc8c8c8ccc8c8c8ccc8c8c8ccc8c8c8ccc8c8c8ccc8c8c8ccc8c8c8ccc8c8c8ccc8c8c8ccc8c8c8ccc8c8c8ccc8c8c
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8c
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            8c8ccc8c8c8ccc8c8c8ccc8c8c8ccc8c8c8ccc8c8c8ccc8c8c8ccc8c8c8ccc8c8c8ccc8c8c8ccc8c8c8ccc8c8c8ccc8c8c8ccc8c8c8ccc8c8c8ccc8c8c8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8ccc8c
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cc8c8c8ccc8c8c8ccc8c8c8ccc8c8c8ccc8c8c8ccc8c8c8ccc8c8c8ccc8c8c8ccc8c8c8ccc8c8c8ccc8c8c8ccc8c8c8ccc8c8c8ccc8c8c8ccc8c8c8ccc8c8c8ccc8c8c8ccc8c8c8ccc8ccc8ccc8ccc8c
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c
            a8ccccccc8ccccccc8ccccccc8ccccccc8ccccccc8ccccccc8ccccccc8ccccccc8ccccccc8ccccccc8ccccccc8ccccccc8ccccccc8ccccccc8ccccccc8ccccccc8cccccccccccccccccccccccccccccc
            8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            `)
        tiles.setTilemap(tilemap`level_1`)
        info.startCountdown(60)
        levelScore = 91
        levelTitle = "Sunk to da BOTtom!"
        controller.moveSprite(player, 75, 75)
        player.ay = 1 * pixelsToMeters
    } else if (level == 4) {
        effects.clouds.startScreenEffect()
        scene.setBackgroundImage(img`
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            `)
        tiles.setTilemap(tilemap`level_2`)
        info.startCountdown(120)
        levelScore = 137
        levelTitle = "Mech MAZEment!"
        controller.moveSprite(player, 100, 100)
        player.ay = gravity
        myTile = sprites.dungeon.floorDarkDiamond
    }
    initializeLevel(level, levelTitle)
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava0, function (sprite, location) {
    info.setLife(0)
})
function toContinue () {
    if (game.ask("Continue?")) {
        music.stopAllSounds()
        setLevelTileMap(currentLevel)
    } else {
        game.over(false)
    }
}
function standIdle () {
    player.setImage(img`
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        .............ddddddd............
        ............ddddddddd...........
        ...........d7ddddddd7d..........
        ...........dd7ddddd7dd..........
        ...........ddd7ddd7ddd..........
        ...........ddd44444ddd..........
        ...........dd44ff444dd..........
        .........1.dd4ff1f44dd.1........
        .........11dd4feef44dd11........
        ........f111dd4ff44dd111f.......
        .......ff1117ddddddd7111ff......
        .......fffffdfff1fffdfffff......
        ........dd.dddff1ffddd.dd.......
        ........ff.ddddf1fdddd.ff.......
        ........ff.dfdfdddfdfd.ff.......
        .......fff.dffdddddffd.77.......
        ......ffdfddffd777dffdd77.......
        .......fffddfd77777dfddf........
        ..........dddd77777ddddf.f......
        ..........dddf77777fddd.f.......
        ..........ddddddddddddd.........
        ..........fff.......fff.........
        .........7777.......7777........
        ........77777.......77777.......
        .........7777.......7777........
        `)
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    playerRight1 = img`
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        .............ddddddd............
        ............ddddddddd...........
        ...........d7d7ddddddd..........
        ...........ddddd7ddddd..........
        ...........7dddddd7ddd..........
        ...........ddddddddd44..........
        ...........ddddffdd4fe..........
        ...........dddf11fd4fe..........
        ...........dddf11fd444..........
        ............dd1111ddd...........
        ............7d1111dd7...........
        ...........f.ffffff.............
        ..........f4.dfddfdd............
        .........f14ddffffddd...........
        .........f74ddffffddd...........
        .........f54dddfffddd...........
        .........f24dddfdffdd...........
        ........f444dddfffdd7...........
        .........fffdddddddd7...........
        ............ddddddd77...........
        .............ddddddd............
        ...............ffff.............
        ...............77777............
        ..............7777777...........
        ...............7777777...c......
        `
    playerRight2 = img`
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        .............ddddddd............
        ............ddddddddd...........
        ...........d7d7ddddddd..........
        ...........ddddd7ddddd..........
        ...........7dddddd7ddd..........
        ...........ddddddddd44..........
        ...........ddddffdd4fe..........
        ...........dddf11fd4fe..........
        ...........dddf11fd444..........
        ............dd1111ddd...........
        ............7d1111dd7...........
        ...........f.ffffff.............
        ..........f4ddfddfddff..........
        .........f14ddffffdddff.........
        .........f74ddffffdddf.f........
        .........f54dddfffdddfff........
        .........f24dddfdffdd...........
        ........f444dddfffdd7...........
        .........fffdddddddd7...........
        ............ddddddd77...........
        .............ddddddd............
        ............fff.dffff...........
        ...........7777.f77777..........
        ............777f7777777.........
        .............777f7777777.c......
        `
    playerRight3 = img`
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        .............ddddddd............
        ............ddddddddd...........
        ...........d7d7ddddddd..........
        ...........ddddd7ddddd..........
        ...........7dddddd7ddd..........
        ...........ddddddddd44..........
        ...........ddddffdd4fe..........
        ...........dddf11fd4fe..........
        ...........dddf11fd444..........
        ............dd1111ddd...........
        ............7d1111dd7...........
        ...........f.ffffff.............
        ..........f4ddfddfddd...........
        .........f14dddffffdd...........
        .........f74dddffffdd...........
        .........f54ddddfffdd...........
        .........f24ddddfdffd...........
        ........f444ddddfffd7...........
        .........fffdddddddd7...........
        ............ddddddd77...........
        .............dddddddff..........
        ............fffff.fff...........
        ............77777f.77777........
        ...........7777777f777777.......
        ............7777777f777777......
        `
    playerRight1.flipX()
    playerRight2.flipX()
    playerRight3.flipX()
    list = [playerRight1, playerRight2, playerRight3]
    animation.runImageAnimation(
    player,
    list,
    100,
    true
    )
})
function giveEnding () {
    info.showCountdown(false)
clearGame()
    player.destroy()
    tiles.setTilemap(tilemap`level_3`)
    scene.setBackgroundImage(img`
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbdfffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdbbbbbffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbfffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbcccbbbbbffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbccbbbbbffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdfdddddffffffffffffffffffffffffffffffffbbbbbcccbbbbbbffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffddddbbbdddffffffffffffffffffffffffffffffbbbbbbcccccccbbdfffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffdddbbbbbbbdddffffffffffffffffffffffffffffbbbcccccccccccbdfffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffddbbbbbbbcbbddfffffffffddddffffffffffffffdbccccccccccccbbdfffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffddbbcbbcbbbcbbbddfffffddb9dbddfffffffffffbbcccccccccccbbbbdfffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbcbbccccbbbbcbffffdd66dd66dddfffffffffbcccccccccccbbbbddfffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffbbdbbcccccbbcbbbbffdddd6ddddbdd7dfffffffdbcccccccccbbbbbddffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffdddbbcccccbcccbbbffddddddddddd777dfffffddcccccccccbbbbbdffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffbddddbccccccccccbbfddddb77b777bb77bffffddbcccccccbbbcbddfffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffdddddcccccccccccbbfdbbd7dddddb7bbbdbffdddbccccccbbcbbddffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffdddbccccccccccbbbbbbdbdddbdbbd7bbbbbbbbbbbccccbbcbbdffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffdddbcccccccfccbbbbcbbbddbcfbbdbbbcccbbdddbbcccccbddbffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffdddbcccccccccccbbbbbbbddbbcbdbbbbbbcccbddbbbdbbbdfffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffdddbccccccccccbccbbcbbbddddddbccccccfccbbbbbbbbdffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffddbccccccccbbcffccb7cbbbdddbbc7bcffffcbbbbbbbbdffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffdbcccccccbbbcffcbddddddddddd1ddbccfcbbbcbbbbbdffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbcccbbbdbbcddddbbbbbbbbbbddddbbbdddbbbbddfffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdddbbdddddddbbbbbdbbbbbdddddbddddbbddfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddbddcbbdddbdddddddbddddbbbddddbddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffdddddddddffffddddffddddffbbbbdbbddbdddbbdddddddddbd7bbbddbbdfffffffffdddddddffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffddddddddbbffddddddddddd7ddbcbbdebbddddbbdddddddddddbbb7dddbcdffffffdfddddddddddddffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffbddddddddddbbbbdddd7bd7ddd77bcbbbb7dbdbdddddddddddddd777bbdbbcbdddddddddd1111dddddddfffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffdddddddddddbbbbbdddd7777ddd7ccbbbbbbdddbddddddddddddd77ddddbccbddddddddddd1111dddddddffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffddddddddddbbbddb77777777b7be7ccbbddddbdbbddddddddddd77ddddbbcccbdddddddbdd11d1ddddddddfffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffddbbbbdbdddbbbbbbc777777777eecccbbdddddbbdddddddddd77ddddddbbcccbbbbbbbbbbbbdddd7ddbbddfffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffdbbbbbbbddbbbbddbbe7777e777eecccbbbdddddb7dddddddd7d1ddddddbbcccbbbbbbbbbbbbbbbd777bbddfffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffdbbbbbbbbbdbbbddbbbe77777bbb7bbccbbbbbdbbbbbddddddbdddbbbbddbbbccbdbbbbbbbbdddbb77777bbdfffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffdbbccccbbbbbbbbbbbb77777bbbbdbbcbbbbbbbbdbbbdddddddddddbbbbbbbbcddddddddddddddb7777e7bddfffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffdbbccccbbbbbbbbbbbb7777bddffffbbdbbbbbbdddbbbbbbbddddddbbbbbbbbb1fffdddddffffbd7b7dbbbddfffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffbbbccccbbbbbbbbbbbbbb7bdfffffffddbbbbbbbbbbccccbbbcbbbbbbbbbbbbdffffffffffffffdb77ddbbbffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffbbbbcccbbbbbbbbbbbbdddbffffffffddbbbbbbbcccccccccbbccbbbbbbbbbddfffffffffffffffd7ddddbcbfffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffbbbbccbbbbbbbbbbbbdfffffffffffffddbbbbbccccccccccccccccbbbbbbbddffffffffffffffbbbbbbbbcbfffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffbbbbccbbbbbbbbdbbddfffffffffffffddbbbbcccccccccccccccccfbbbbbddffffffffffffffbcccccccccbfffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffdbbccccbbbbbbdddddffffffffffffff5ddbbccccccccccccccccccccbbbddfffffffffffffffbccccccccbbfffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffdbbccccbbbbbdddddfffffffffffffffffddbccccccccccccccccfccccbbdffffffffffffffffbbccbbbcbbdfffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffdbbcccbbbbbddddffffffffffffffffffddbcccccccccccccccccccccbd1ffffffffffffffffbbccccccbdffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffdbbbcbbbbbbddddffffffffffffffffffffdbcccccfffffffffcccccbd1fffffffffffffffff1cccccccbdffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffbbbbbbbbbddddfffffffffffffffffffffddbccbcfffffffffccccbdffffffffffffffffffffbcccbbcbdffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffdbbbbbbbbddddffffffffffffffffffffffdddddccceeeeeecbdbddbffffffffffffffffffffbcbbcccbfffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffdddddbbbddddfffffffffffffffffffffffffddb7bbbbbbbbbbdd1fffffffffffffffffffffdcccccccbdffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffdddddbbdddfffffffffffffffffffffffffffdbbbbbbbbbbbbddffffffffffffffffffffffbccbbdbccbffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffddddffffffffffffffffffffffffffffffdbbbbbbbbbbbbbdffffffffffffffffffffff1ccbdddbcbffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdbbbbbbbbbbbbbdfffffffffffffffffffffffbbbbdddbdffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdddfbbbbbbbbbbb7ddddd1fffffffffffffffffffbddbbbbdddfffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdd7777b7bbbbbbbb77d777dddfffffffffffffffffbbbbbbbbddddffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffd77d777e77bbbbbb7777777ddddfffffffffffffffddbbbbbbddddddfffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdd777dd777b7bbbbb777777ddddddfffffffffffffddddbbbbbbbddddfffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdd777dd777ffdddddd777d77dddddffffffffffffdddddbbbbbbdbbbdfffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddddffffd77bbb777dffffdfffd7777ddd7ddfffbdbbbdffddddddbbbbbbbddddfffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffdbbcbbdfffd7bdddb77dffffffffd777dddddddffbbbbbbbb1bbbbbbbdfbbbbddbdfffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffdbcccccbbffdbbbddbb7dffffffffd77bdddddddf1bbccbcccbbbddbbbffbcbbddbddffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffdbccbbcccbbddbbdbdbd7dfffffffffd7bbdddddddbbcccbbccbbbddbbdffbcbbddbbdffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffbbcbbccccbbddbbbdbbbdfffffffffffdbbbbdddddbbbcccbcccbbdddffffbcbbddbdfffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffbbccbbccbbbdbbbbbbbbdfffffffffffbbbbbdddddbbbccbccccbbdddffffbbbbdbbdfffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffbccccbccbbbdbbbdbbbbbffffffffffbbbbbbbbdddbbbccccbcccbbddffffbbcbbbbdfffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffbccccbccbbbdddddbbbbbffffffffffdbbbbbdddddbcbccccbcccbbdfffffbccbdbdbfffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffbbcccbccbbbddddbbbbbbbbbfffffbbbbbbbbdbdddbbcccccdcccbddfffffbccbbdfffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffbbcccbccbbddbbbbbbbbbccbffffdcccbbbbbbbdbddbcccccbcccbfffffffbccbddfffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffbcccccccbbbbbdddbbbbbccbdfffbcfcbbbbbddddddbcccccccccbfffffffbcbbdffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffbcccccccbbbbbbbdbbbbbccbbffdbbfcbbbbbbddbdbbcccccccccbfffffffdbddfffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffbcccccccbbbbbbbbbbbbccccbffbccffbbcbbbbbbbbccccccccccbffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffbcccccccbbbcbbbbbbbccccccffcccfffcbbbbbbbbbccccccccccbffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffbccccccccccbbbbbbbbccccccdfccccfffbbbbbbbbbccccccccccbffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffbccccccccccbbbddbbbccccccdfccccffcbbbddbbbbccccccccccdffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffbcccccccccbbbbbddbbccccccbfcccccccbbdffbbbbbccccccccbfffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffbcccfccccccccfffdbbccccccbfcccccccbbdfffbcbbccccccccbfffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffbccccccccccccffffddccccbbffcbcccccbfffffdcbbccccccccbfffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffbccccccccbcccffffffbcccccffbcccccbfffffffccbccccccccdfffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffdbcccccccbccbffffffbcccbdffdbcccbbfffffffccbcccccccbffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffdccccccccccffffffffbbbbffffbbbbdffffffffbcccccccccbffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffdbcccccccbbfffffffffbfffffffffffffffffffbbbccccccbbffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbcccccbbfffffffffffffffffffffffffffffffbbccccccbfffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbcccbbbffffffffffffffffffffffffffffffffbbcccbbffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbffffffffffffffffffffffffffffffffffbbbc6fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        `)
    scene.setBackgroundColor(15)
    game.setDialogFrame(img`
        . 6 6 6 6 6 6 6 6 6 6 6 6 6 . . 
        6 6 1 1 1 1 1 1 1 1 1 1 1 6 6 . 
        6 1 1 a a a a a a a a a 1 1 6 . 
        6 1 a a 1 1 1 1 1 1 1 a a 1 6 . 
        6 1 a 1 1 1 1 1 1 1 1 1 a 1 6 . 
        6 1 a 1 1 1 1 1 1 1 1 1 a 1 6 . 
        6 1 a 1 1 1 1 1 1 1 1 1 a 1 6 . 
        6 1 a 1 1 1 1 1 1 1 1 1 a 1 6 . 
        6 1 a 1 1 1 1 1 1 1 1 1 a 1 6 . 
        6 1 a 1 1 1 1 1 1 1 1 1 a 1 6 . 
        6 1 a 1 1 1 1 1 1 1 1 1 a 1 6 . 
        6 1 a a 1 1 1 1 1 1 1 a a 1 6 . 
        6 1 1 a a a a a a a a a 1 1 6 . 
        6 6 1 1 1 1 1 1 1 1 1 1 1 6 6 . 
        . 6 6 6 6 6 6 6 6 6 6 6 6 6 . . 
        . . . . . . . . . . . . . . . . 
        `)
    game.setDialogCursor(img`
        .......ddddddd......
        ......ddddddddd.....
        .....d7ddddddd7d....
        .....dd7ddddd7dd....
        .....ddd7ddd7ddd....
        .....ddd44444ddd....
        .....dd44ff444dd....
        ...1.dd4ff1f44dd.1..
        ...11dd4feef44dd11..
        ..f111dd4ff44dd111f.
        .ff1117ddddddd7111ff
        .fffffdfff1fffdfffff
        ..dd.dddff1ffddd.dd.
        ..ff.ddddf1fdddd.ff.
        ..ff.dfdfdddfdfd.ff.
        .fff.dffdddddffd.77.
        ffdfddffd777dffdd77.
        .fffddfd77777dfddf..
        ....dddd77777ddddf.f
        ....dddf77777fddd.f.
        ....ddddddddddddd...
        ....fff.......fff...
        ...7777.......7777..
        ..77777.......77777.
        ...7777.......7777..
        `)
    showDialog("Congratulations! You've fully repaired your Mechbot!")
    showDialog("You are Ready2Robot Pilot!")
    pause(2000)
    game.reset()
}
function clearGame () {
    score = 0
    effects.clouds.endScreenEffect()
    effects.bubbles.endScreenEffect()
    for (let value2 of sprites.allOfKind(SpriteKind.Board)) {
        value2.destroy()
    }
    for (let value3 of sprites.allOfKind(SpriteKind.Coral)) {
        value3.destroy()
    }
}
info.onCountdownEnd(function () {
    toContinue()
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    player,
    [img`
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        .............ddddddd............
        ............ddddddddd...........
        ...........d7d7ddddddd..........
        ...........ddddd7ddddd..........
        ...........7dddddd7ddd..........
        ...........ddddddddd44..........
        ...........ddddffdd4fe..........
        ...........dddf11fd4fe..........
        ...........dddf11fd444..........
        ............dd1111ddd...........
        ............7d1111dd7...........
        ...........f.ffffff.............
        ..........f4.dfddfdd............
        .........f14ddffffddd...........
        .........f74ddffffddd...........
        .........f54dddfffddd...........
        .........f24dddfdffdd...........
        ........f444dddfffdd7...........
        .........fffdddddddd7...........
        ............ddddddd77...........
        .............ddddddd............
        ...............ffff.............
        ...............77777............
        ..............7777777...........
        ...............7777777...c......
        `,img`
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        .............ddddddd............
        ............ddddddddd...........
        ...........d7d7ddddddd..........
        ...........ddddd7ddddd..........
        ...........7dddddd7ddd..........
        ...........ddddddddd44..........
        ...........ddddffdd4fe..........
        ...........dddf11fd4fe..........
        ...........dddf11fd444..........
        ............dd1111ddd...........
        ............7d1111dd7...........
        ...........f.ffffff.............
        ..........f4ddfddfddff..........
        .........f14ddffffdddff.........
        .........f74ddffffdddf.f........
        .........f54dddfffdddfff........
        .........f24dddfdffdd...........
        ........f444dddfffdd7...........
        .........fffdddddddd7...........
        ............ddddddd77...........
        .............ddddddd............
        ............fff.dffff...........
        ...........7777.f77777..........
        ............777f7777777.........
        .............777f7777777.c......
        `,img`
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        .............ddddddd............
        ............ddddddddd...........
        ...........d7d7ddddddd..........
        ...........ddddd7ddddd..........
        ...........7dddddd7ddd..........
        ...........ddddddddd44..........
        ...........ddddffdd4fe..........
        ...........dddf11fd4fe..........
        ...........dddf11fd444..........
        ............dd1111ddd...........
        ............7d1111dd7...........
        ...........f.ffffff.............
        ..........f4.dfddfdd............
        .........f14ddffffddd...........
        .........f74ddffffddd...........
        .........f54dddfffddd...........
        .........f24dddfdffdd...........
        ........f444dddfffdd7...........
        .........fffdddddddd7...........
        ............ddddddd77...........
        .............ddddddd............
        ...............ffff.............
        ...............77777............
        ..............7777777...........
        ...............7777777...c......
        `,img`
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        .............ddddddd............
        ............ddddddddd...........
        ...........d7d7ddddddd..........
        ...........ddddd7ddddd..........
        ...........7dddddd7ddd..........
        ...........ddddddddd44..........
        ...........ddddffdd4fe..........
        ...........dddf11fd4fe..........
        ...........dddf11fd444..........
        ............dd1111ddd...........
        ............7d1111dd7...........
        ...........f.ffffff.............
        ..........f4ddfddfddd...........
        .........f14dddffffdd...........
        .........f74dddffffdd...........
        .........f54ddddfffdd...........
        .........f24ddddfdffd...........
        ........f444ddddfffd7...........
        .........fffdddddddd7...........
        ............ddddddd77...........
        .............dddddddff..........
        ............fffffffff77.........
        ............77777f777777........
        ...........7777777f777777.......
        ............7777777f777777......
        `],
    100,
    true
    )
})
function showDialog (text: string) {
    game.showLongText(text, DialogLayout.Bottom)
}
info.onLifeZero(function () {
    toContinue()
})
function setGravity () {
    pixelsToMeters = 30
    gravity = 9.81 * pixelsToMeters
}
function initializeLevel (level: number, levelTitle: string) {
    game.splash("Level " + level + "\n" + levelTitle)
    playerStartLocation = tiles.getTilesByType(myTiles.tile7)[0]
    tiles.placeOnTile(player, playerStartLocation)
    tiles.setTileAt(playerStartLocation, myTile)
    spawnGoals()
    spawnCoral()
    playLoops()
}
scene.onOverlapTile(SpriteKind.Player, myTiles.tile1, function (sprite, location) {
    tiles.setTileAt(location, myTiles.transparency16)
    score += 1
    music.baDing.play(255)
})
function hasNextLevel () {
    return currentLevel <= levelCount
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Board, function (sprite, otherSprite) {
    otherSprite.destroy(effects.trail, 250)
    otherSprite.y += -3
    score += 3
    music.baDing.play(255)
})
function spawnGoals () {
    for (let value4 of tiles.getTilesByType(myTiles.tile4)) {
        board = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . f f f f f f f f f f . . . 
            . . . f 7 7 b b b b 7 7 f . . . 
            . . . f 7 7 7 7 7 7 7 7 f . . . 
            . . . f b 7 7 4 4 7 7 b f . . . 
            . . . f b 7 7 4 4 7 7 b f . . . 
            . . . f b 7 7 4 4 7 7 b f . . . 
            . . . f b 7 7 4 4 7 7 b f . . . 
            . . . f 7 7 7 7 7 7 7 7 f . . . 
            . . . f 7 7 b b b b 7 7 f . . . 
            . . . f f f f f f f f f f . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Board)
        tiles.placeOnTile(board, value4)
        animation.runImageAnimation(
        board,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . f f f f f f f f f f . . . 
            . . . f 7 7 b b b b 7 7 f . . . 
            . . . f 7 7 7 7 7 7 7 7 f . . . 
            . . . f b 7 7 4 4 7 7 b f . . . 
            . . . f b 7 7 4 4 7 7 b f . . . 
            . . . f b 7 7 4 4 7 7 b f . . . 
            . . . f b 7 7 4 4 7 7 b f . . . 
            . . . f 7 7 7 7 7 7 7 7 f . . . 
            . . . f 7 7 b b b b 7 7 f . . . 
            . . . f f f f f f f f f f . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . f f f f f f f f f f . . . . 
            . . f 7 7 f f b b b f f . . . . 
            . . f 7 7 f 7 7 7 7 7 f . . . . 
            . . f 7 7 b 7 7 4 7 7 f . . . . 
            . . f 7 7 b 7 7 4 4 7 b . . . . 
            . . f 7 7 b 7 7 4 4 7 b . . . . 
            . . f 7 7 b 7 7 4 7 7 f . . . . 
            . . f 7 7 f 7 7 7 7 7 f . . . . 
            . . f 7 7 f f b b b f f . . . . 
            . . f f f f f f f f f f . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . f f f f f f f f f . . . . 
            . . . f 7 7 7 f 7 f f f . . . . 
            . . . f 7 b 7 b b b 7 f . . . . 
            . . . f b 7 b 7 7 7 7 f . . . . 
            . . . f b 7 b 7 4 7 7 f . . . . 
            . . . f b 7 b 7 4 7 7 f . . . . 
            . . . f b 7 b 7 7 7 7 f . . . . 
            . . . f 7 b 7 b b b 7 f . . . . 
            . . . f 7 7 7 f 7 f f f . . . . 
            . . . f f f f f f f f f . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f f f 7 f . . . . . 
            . . . . . f 7 f 7 7 f . . . . . 
            . . . . . f b f b b f . . . . . 
            . . . . . f b f b 7 f . . . . . 
            . . . . . f b f b 7 f . . . . . 
            . . . . . f b f b b f . . . . . 
            . . . . . f 7 f 7 7 f . . . . . 
            . . . . . f f f f 7 f . . . . . 
            . . . . . f f f f f f . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f 7 f f f f . . . . . 
            . . . . . f 7 7 f 7 f . . . . . 
            . . . . . f b b f b f . . . . . 
            . . . . . f 7 b f b f . . . . . 
            . . . . . f 7 b f b f . . . . . 
            . . . . . f b b f b f . . . . . 
            . . . . . f 7 7 f 7 f . . . . . 
            . . . . . f 7 f f f f . . . . . 
            . . . . . f f f f f f . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f f f f . . . 
            . . . . f f f b f b f f f . . . 
            . . . . f 7 7 7 7 7 b 7 f . . . 
            . . . . f 7 7 7 7 b 7 b f . . . 
            . . . . f b 7 4 7 b 7 b f . . . 
            . . . . f b 7 4 7 b 7 b f . . . 
            . . . . f 7 7 7 7 b 7 b f . . . 
            . . . . f 7 7 7 7 7 b 7 f . . . 
            . . . . f f f b f b f f f . . . 
            . . . . f f f f f f f f f . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f f f f f . . 
            . . . . f f b b b f f 7 7 f . . 
            . . . . f 7 7 7 7 7 f 7 7 f . . 
            . . . . f 7 7 4 7 7 b 7 7 f . . 
            . . . . b 7 4 4 7 7 b 7 7 f . . 
            . . . . b 7 4 4 7 7 b 7 7 f . . 
            . . . . f 7 7 4 7 7 b 7 7 f . . 
            . . . . f 7 7 7 7 7 f 7 7 f . . 
            . . . . f f b b b f f 7 7 f . . 
            . . . . f f f f f f f f f f . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        500,
        true
        )
        tiles.setTileAt(value4, myTiles.transparency16)
    }
}
function jumpRight () {
    player.setImage(img`
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        .............ddddddd............
        ............ddddddddd...........
        ...........d7d7ddddddd..........
        ...........ddddd7ddddd..........
        ...........7dddddd7ddd..........
        ...........ddddddddd44..........
        ...........ddddffdd4fe..........
        ...........dddf11fd4fe..........
        ...........dddf11fd444..........
        ............dd1111ddd...........
        ............7d1111dd7...........
        ...........f.ffffff.............
        ..........f4.dfddfdd............
        .........f14ddfffdddd...........
        .........f74ddfffdddd...........
        .........f54ddfdffddd...........
        .........f24ddfffdddd...........
        ........f444dddddddd7...........
        .........fffdddddddd7...........
        .........212ddddddd77...........
        .........252.ddddddd............
        ........24442..ffff.............
        ........2442...77777............
        .......2442...7777777...........
        .......222.....7777777...c......
        `)
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleInsignia, function (sprite, location) {
    if (score == levelScore) {
        currentLevel += 1
        playingMusic = false
        music.stopAllSounds()
        if (hasNextLevel()) {
            game.splash("Next level unlocked!")
            setLevelTileMap(currentLevel)
        } else {
            giveEnding()
        }
    } else {
        player.say("Find all parts!", 2000)
    }
})
let playerFacingLeft = false
let board: Sprite = null
let playerStartLocation: tiles.Location = null
let list: Image[] = []
let playerRight3: Image = null
let playerRight2: Image = null
let pixelsToMeters = 0
let levelTitle = ""
let levelScore = 0
let myTile: Image = null
let coral: Sprite = null
let gravity = 0
let player: Sprite = null
let playerRight1: Image = null
let beat = 0
let playingMusic = false
let score = 0
let levelCount = 0
let currentLevel = 0
let positions: number[] = []
const b1 = new music.Melody("@10,120,80,0 ~15 c2-120 d# f  f# g f# f  d#")
const b4 = new music.Melody("@10,120,80,0 ~15 f2-120 g# a# b  c3 b2  a# g#")
const b5 = new music.Melody("@10,120,80,0 ~15 g2-120 a# c3 c# d  c# a2# g")
const g0 = new music.Melody("@100,100,160,0 ~15 r-120 r r r r r r r")
const g1a = new music.Melody("@100,100,160,0 ~15 c4-240 g r r c5 g r r c5 b4 g4 f# e d#-120 e-240")
const g1b = new music.Melody("@100,100,160,0 ~15 c4-240 r f# g r g r r f# f r d# r c-120")
const g4 = new music.Melody("@100,100,160,0 ~15 f4-120 r f a# b a# f5-60")
const g5 = new music.Melody("@100,100,160,0 ~15 r-120 g4 r g d5 c# d g")
positions = [0, 0]
let lengths = [2, 2]
let vol = 32
let volumes = [vol - vol * 0.2, vol - vol * 0.1]
let tracks = [[
b1,
b1,
b1,
b1,
b4,
b4,
b1,
b1,
b5,
b4,
b1,
b1
], [
g0,
g1a,
g1b,
g1a,
g4,
g4,
g1a,
g1b,
g5,
g4,
g1a,
g1b
]]
scene.setBackgroundColor(15)
let textSprite = textsprite.create("READY2ROBOT!", 0, 5)
textSprite.setOutline(1, 8)
textSprite.setMaxFontHeight(10)
textSprite.setPosition(83, 21)
pause(5000)
game.splash("Sinkhole's Adventures")
textSprite.destroy()
music.setVolume(128)
setLevel()
setGravity()
setPlayer()
setLevelTileMap(currentLevel)
giveIntroduction()
game.onUpdate(function () {
    if (player.vx < 0) {
        playerFacingLeft = true
    } else if (player.vx > 0) {
        playerFacingLeft = false
    }
    if (player.vy != 0 || player.isHittingTile(CollisionDirection.Top)) {
        if (playerFacingLeft) {
            jumpLeft()
        } else {
            jumpRight()
        }
    } else if (player.vx == 0 && player.vy == 0 && player.isHittingTile(CollisionDirection.Bottom)) {
        standIdle()
    }
})
forever(function () {
    if (currentLevel != 3) {
        if (controller.down.isPressed()) {
            controller.moveSprite(player, 0, 0)
        } else {
            controller.moveSprite(player, 100, 100)
        }
    } else {
        if (controller.down.isPressed()) {
            controller.moveSprite(player, 0, 0)
        } else {
            controller.moveSprite(player, 75, 75)
        }
    }
})
game.onUpdateInterval(1000 * 60 / 240 * 8, function () {
    if (!(playingMusic)) {
        music.stopAllSounds()
        return
    }
    for (let track = 0; track <= 1; track++) {
        if (beat % lengths[track] == 0) {
            tracks[track][positions[track]].play(volumes[track])
++positions[track]
if (positions[track] >= tracks[track].length) {
                positions[track] = 0
            }
        }
    }
    beat += 1
})
