enum ActionKind {
    RunningLeft,
    RunningRight,
    Idle,
    JumpingLeft,
    JumpingRight,
    Walking,
    Jumping
}
namespace SpriteKind {
    export const Board = SpriteKind.create()
    export const Coral = SpriteKind.create()
}
// textSprite.setText("")
// 
// textSprite.update()
function setLevel () {
    levelCount = 4
    currentLevel = 0
}
scene.onOverlapTile(SpriteKind.Player, myTiles.tile2, function (sprite, location) {
    tiles.setTileAt(location, myTiles.transparency16)
    score += 2
    music.baDing.play()
})
function initializeAnimations () {
    initializePlayerAnimations()
    initializeBoardAnimation()
    initializeCoralAnimation()
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
function animateIdle () {
    mainIdle = animation.createAnimation(ActionKind.Idle, 100)
    animation.attachAnimation(player, mainIdle)
    mainIdle.addAnimationFrame(img`
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
        animation.attachAnimation(coral, coralAnimation)
        animation.setAction(coral, ActionKind.Idle)
        tiles.setTileAt(value1, myTiles.transparency16)
    }
}
function setLevelTileMap (level: number) {
    clearGame()
    myTile = myTiles.transparency16
    if (level == 0) {
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
    } else if (level == 1) {
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
    } else if (level == 2) {
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
    } else if (level == 3) {
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
function animateRun () {
    mainRunLeft = animation.createAnimation(ActionKind.RunningLeft, 100)
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
    leftPlayer1 = sprites.create(playerRight1, 0)
    leftPlayer2 = sprites.create(playerRight2, 0)
    leftPlayer3 = sprites.create(playerRight3, 0)
    playerRight1.flipX()
    playerRight2.flipX()
    playerRight3.flipX()
    animation.attachAnimation(player, mainRunLeft)
    mainRunLeft.addAnimationFrame(playerRight1)
    mainRunLeft.addAnimationFrame(playerRight2)
    mainRunLeft.addAnimationFrame(playerRight1)
    mainRunLeft.addAnimationFrame(playerRight3)

    mainRunRight = animation.createAnimation(ActionKind.RunningRight, 100)
    animation.attachAnimation(player, mainRunRight)
    mainRunRight.addAnimationFrame(img`
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
        `)
    mainRunRight.addAnimationFrame(img`
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
        `)
    mainRunRight.addAnimationFrame(img`
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
        `)
    mainRunRight.addAnimationFrame(img`
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
        `)
    leftPlayer1.destroy()
    leftPlayer2.destroy()
    leftPlayer3.destroy()
}
function animateJump () {
    mainJumpLeft = animation.createAnimation(ActionKind.JumpingLeft, 100)
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
    leftPlayer1 = sprites.create(playerRight1, 0)
    playerRight1.flipX()
    animation.attachAnimation(player, mainJumpLeft)
    mainJumpLeft.addAnimationFrame(playerRight1)
    mainJumpRight = animation.createAnimation(ActionKind.JumpingRight, 100)
    animation.attachAnimation(player, mainJumpRight)
    mainJumpRight.addAnimationFrame(img`
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
    for (let index = 0; index < 30; index++) {
        mainJumpRight.addAnimationFrame(img`
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
    leftPlayer1.destroy()
}
function initializeCoralAnimation () {
    coralAnimation = animation.createAnimation(ActionKind.Idle, 600)
    coralAnimation.addAnimationFrame(img`
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
        `)
    coralAnimation.addAnimationFrame(img`
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
        `)
    coralAnimation.addAnimationFrame(img`
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
        `)
    coralAnimation.addAnimationFrame(img`
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
        `)
    coralAnimation.addAnimationFrame(img`
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
        `)
    coralAnimation.addAnimationFrame(img`
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
        `)
}
function toContinue () {
    if (game.ask("Continue?")) {
        setLevelTileMap(currentLevel)
    } else {
        game.over(false)
    }
}
function initializePlayerAnimations () {
    animateIdle()
    animateJump()
    animateRun()
}
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
    pause(3000)
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
info.onLifeZero(function () {
    toContinue()
})
function showDialog (text: string) {
    game.showLongText(text, DialogLayout.Bottom)
}
function setGravity () {
    pixelsToMeters = 30
    gravity = 9.81 * pixelsToMeters
}
function initializeLevel (level: number, levelTitle: string) {
    game.splash("Level " + (level + 1) + "\n" + levelTitle)
    playerStartLocation = tiles.getTilesByType(myTiles.tile7)[0]
    tiles.placeOnTile(player, playerStartLocation)
    tiles.setTileAt(playerStartLocation, myTile)
    spawnGoals()
    spawnCoral()
}
function initializeBoardAnimation () {
    boardAnimation = animation.createAnimation(ActionKind.Idle, 200)
    boardAnimation.addAnimationFrame(img`
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
        `)
    boardAnimation.addAnimationFrame(img`
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
        `)
    boardAnimation.addAnimationFrame(img`
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
        `)
    boardAnimation.addAnimationFrame(img`
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
        `)
    boardAnimation.addAnimationFrame(img`
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
        `)
    boardAnimation.addAnimationFrame(img`
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
        `)
    boardAnimation.addAnimationFrame(img`
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
        `)
}
scene.onOverlapTile(SpriteKind.Player, myTiles.tile1, function (sprite, location) {
    tiles.setTileAt(location, myTiles.transparency16)
    score += 1
    music.baDing.play()
})
function hasNextLevel () {
    return currentLevel != levelCount
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Board, function (sprite, otherSprite) {
    otherSprite.destroy(effects.trail, 250)
    otherSprite.y += -3
    score += 3
    music.baDing.play()
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
        animation.attachAnimation(board, boardAnimation)
        animation.setAction(board, ActionKind.Idle)
        tiles.setTileAt(value4, myTiles.transparency16)
    }
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleInsignia, function (sprite, location) {
    if (score == levelScore) {
        currentLevel += 1
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
let boardAnimation: animation.Animation = null
let playerStartLocation: tiles.Location = null
let mainJumpRight: animation.Animation = null
let mainJumpLeft: animation.Animation = null
let mainRunRight: animation.Animation = null
let leftPlayer3: Sprite = null
let leftPlayer2: Sprite = null
let leftPlayer1: Sprite = null
let playerRight3: Image = null
let playerRight2: Image = null
let playerRight1: Image = null
let mainRunLeft: animation.Animation = null
let pixelsToMeters = 0
let levelTitle = ""
let levelScore = 0
let myTile: Image = null
let coralAnimation: animation.Animation = null
let coral: Sprite = null
let gravity = 0
let player: Sprite = null
let mainIdle: animation.Animation = null
let score = 0
let levelCount = 0
let currentLevel = 0
let mySprite = null
// scene.setBackgroundImage(img`
// ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbdfffffffffffffffffffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdbbbbbffffffffffffffffffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbfffffffffffffffffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbcccbbbbbffffffffffffffffffffffffffffffffffffffffffffffffff
// fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbccbbbbbffffffffffffffffffffffffffffffffffffffffffffffffff
// fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdfdddddffffffffffffffffffffffffffffffffbbbbbcccbbbbbbffffffffffffffffffffffffffffffffffffffffffffffff
// fffffffffffffffffffffffffffffffffffffffffffffffffffffffffddddbbbdddffffffffffffffffffffffffffffffbbbbbbcccccccbbdfffffffffffffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffffffffffffffffffffdddbbbbbbbdddffffffffffffffffffffffffffffbbbcccccccccccbdfffffffffffffffffffffffffffffffffffffffffffffff
// fffffffffffffffffffffffffffffffffffffffffffffffffffffffddbbbbbbbcbbddfffffffffddddffffffffffffffdbccccccccccccbbdfffffffffffffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffffffffffffffffffddbbcbbcbbbcbbbddfffffddb9dbddfffffffffffbbcccccccccccbbbbdfffffffffffffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbcbbccccbbbbcbffffdd66dd66dddfffffffffbcccccccccccbbbbddfffffffffffffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffffffffffffffffffbbdbbcccccbbcbbbbffdddd6ddddbdd7dfffffffdbcccccccccbbbbbddffffffffffffffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffffffffffffffffffdddbbcccccbcccbbbffddddddddddd777dfffffddcccccccccbbbbbdffffffffffffffffffffffffffffffffffffffffffffffffff
// fffffffffffffffffffffffffffffffffffffffffffffffffffffbddddbccccccccccbbfddddb77b777bb77bffffddbcccccccbbbcbddfffffffffffffffffffffffffffffffffffffffffffffffffff
// fffffffffffffffffffffffffffffffffffffffffffffffffffffdddddcccccccccccbbfdbbd7dddddb7bbbdbffdddbccccccbbcbbddffffffffffffffffffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffffffffffffffffffdddbccccccccccbbbbbbdbdddbdbbd7bbbbbbbbbbbccccbbcbbdffffffffffffffffffffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffffffffffffffffffdddbcccccccfccbbbbcbbbddbcfbbdbbbcccbbdddbbcccccbddbffffffffffffffffffffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffffffffffffffffffdddbcccccccccccbbbbbbbddbbcbdbbbbbbcccbddbbbdbbbdfffffffffffffffffffffffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffffffffffffffffffdddbccccccccccbccbbcbbbddddddbccccccfccbbbbbbbbdffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
// fffffffffffffffffffffffffffffffffffffffffffffffffffffffddbccccccccbbcffccb7cbbbdddbbc7bcffffcbbbbbbbbdffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffffffffffffffffffffdbcccccccbbbcffcbddddddddddd1ddbccfcbbbcbbbbbdffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbcccbbbdbbcddddbbbbbbbbbbddddbbbdddbbbbddfffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdddbbdddddddbbbbbdbbbbbdddddbddddbbddfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddbddcbbdddbdddddddbddddbbbddddbddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffdddddddddffffddddffddddffbbbbdbbddbdddbbdddddddddbd7bbbddbbdfffffffffdddddddffffffffffffffffffffffffffffffffffffffffffffff
// fffffffffffffffffffffffffffffffffffffddddddddbbffddddddddddd7ddbcbbdebbddddbbdddddddddddbbb7dddbcdffffffdfddddddddddddffffffffffffffffffffffffffffffffffffffffff
// fffffffffffffffffffffffffffffffffffbddddddddddbbbbdddd7bd7ddd77bcbbbb7dbdbdddddddddddddd777bbdbbcbdddddddddd1111dddddddfffffffffffffffffffffffffffffffffffffffff
// fffffffffffffffffffffffffffffffffffdddddddddddbbbbbdddd7777ddd7ccbbbbbbdddbddddddddddddd77ddddbccbddddddddddd1111dddddddffffffffffffffffffffffffffffffffffffffff
// fffffffffffffffffffffffffffffffffffddddddddddbbbddb77777777b7be7ccbbddddbdbbddddddddddd77ddddbbcccbdddddddbdd11d1ddddddddfffffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffddbbbbdbdddbbbbbbc777777777eecccbbdddddbbdddddddddd77ddddddbbcccbbbbbbbbbbbbdddd7ddbbddfffffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffdbbbbbbbddbbbbddbbe7777e777eecccbbbdddddb7dddddddd7d1ddddddbbcccbbbbbbbbbbbbbbbd777bbddfffffffffffffffffffffffffffffffffffffff
// fffffffffffffffffffffffffffffffffdbbbbbbbbbdbbbddbbbe77777bbb7bbccbbbbbdbbbbbddddddbdddbbbbddbbbccbdbbbbbbbbdddbb77777bbdfffffffffffffffffffffffffffffffffffffff
// fffffffffffffffffffffffffffffffffdbbccccbbbbbbbbbbbb77777bbbbdbbcbbbbbbbbdbbbdddddddddddbbbbbbbbcddddddddddddddb7777e7bddfffffffffffffffffffffffffffffffffffffff
// fffffffffffffffffffffffffffffffffdbbccccbbbbbbbbbbbb7777bddffffbbdbbbbbbdddbbbbbbbddddddbbbbbbbbb1fffdddddffffbd7b7dbbbddfffffffffffffffffffffffffffffffffffffff
// fffffffffffffffffffffffffffffffffbbbccccbbbbbbbbbbbbbb7bdfffffffddbbbbbbbbbbccccbbbcbbbbbbbbbbbbdffffffffffffffdb77ddbbbffffffffffffffffffffffffffffffffffffffff
// fffffffffffffffffffffffffffffffffbbbbcccbbbbbbbbbbbbdddbffffffffddbbbbbbbcccccccccbbccbbbbbbbbbddfffffffffffffffd7ddddbcbfffffffffffffffffffffffffffffffffffffff
// fffffffffffffffffffffffffffffffffbbbbccbbbbbbbbbbbbdfffffffffffffddbbbbbccccccccccccccccbbbbbbbddffffffffffffffbbbbbbbbcbfffffffffffffffffffffffffffffffffffffff
// fffffffffffffffffffffffffffffffffbbbbccbbbbbbbbdbbddfffffffffffffddbbbbcccccccccccccccccfbbbbbddffffffffffffffbcccccccccbfffffffffffffffffffffffffffffffffffffff
// fffffffffffffffffffffffffffffffffdbbccccbbbbbbdddddffffffffffffff5ddbbccccccccccccccccccccbbbddfffffffffffffffbccccccccbbfffffffffffffffffffffffffffffffffffffff
// fffffffffffffffffffffffffffffffffdbbccccbbbbbdddddfffffffffffffffffddbccccccccccccccccfccccbbdffffffffffffffffbbccbbbcbbdfffffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffdbbcccbbbbbddddffffffffffffffffffddbcccccccccccccccccccccbd1ffffffffffffffffbbccccccbdffffffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffdbbbcbbbbbbddddffffffffffffffffffffdbcccccfffffffffcccccbd1fffffffffffffffff1cccccccbdffffffffffffffffffffffffffffffffffffffff
// fffffffffffffffffffffffffffffffffffbbbbbbbbbddddfffffffffffffffffffffddbccbcfffffffffccccbdffffffffffffffffffffbcccbbcbdffffffffffffffffffffffffffffffffffffffff
// fffffffffffffffffffffffffffffffffffdbbbbbbbbddddffffffffffffffffffffffdddddccceeeeeecbdbddbffffffffffffffffffffbcbbcccbfffffffffffffffffffffffffffffffffffffffff
// fffffffffffffffffffffffffffffffffffdddddbbbddddfffffffffffffffffffffffffddb7bbbbbbbbbbdd1fffffffffffffffffffffdcccccccbdffffffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffdddddbbdddfffffffffffffffffffffffffffdbbbbbbbbbbbbddffffffffffffffffffffffbccbbdbccbffffffffffffffffffffffffffffffffffffffff
// fffffffffffffffffffffffffffffffffffffffddddffffffffffffffffffffffffffffffdbbbbbbbbbbbbbdffffffffffffffffffffff1ccbdddbcbffffffffffffffffffffffffffffffffffffffff
// fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdbbbbbbbbbbbbbdfffffffffffffffffffffffbbbbdddbdffffffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdddfbbbbbbbbbbb7ddddd1fffffffffffffffffffbddbbbbdddfffffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdd7777b7bbbbbbbb77d777dddfffffffffffffffffbbbbbbbbddddffffffffffffffffffffffffffffffffffffff
// fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffd77d777e77bbbbbb7777777ddddfffffffffffffffddbbbbbbddddddfffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdd777dd777b7bbbbb777777ddddddfffffffffffffddddbbbbbbbddddfffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdd777dd777ffdddddd777d77dddddffffffffffffdddddbbbbbbdbbbdfffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddddffffd77bbb777dffffdfffd7777ddd7ddfffbdbbbdffddddddbbbbbbbddddfffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffffffffffffffffffffdbbcbbdfffd7bdddb77dffffffffd777dddddddffbbbbbbbb1bbbbbbbdfbbbbddbdfffffffffffffffffffffffffffffffffffff
// fffffffffffffffffffffffffffffffffffffffffffffffffffffffdbcccccbbffdbbbddbb7dffffffffd77bdddddddf1bbccbcccbbbddbbbffbcbbddbddffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffffffffffffffffffdbccbbcccbbddbbdbdbd7dfffffffffd7bbdddddddbbcccbbccbbbddbbdffbcbbddbbdffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffffffffffffffffffbbcbbccccbbddbbbdbbbdfffffffffffdbbbbdddddbbbcccbcccbbdddffffbcbbddbdfffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffffffffffffffffffbbccbbccbbbdbbbbbbbbdfffffffffffbbbbbdddddbbbccbccccbbdddffffbbbbdbbdfffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffffffffffffffffffbccccbccbbbdbbbdbbbbbffffffffffbbbbbbbbdddbbbccccbcccbbddffffbbcbbbbdfffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffffffffffffffffffbccccbccbbbdddddbbbbbffffffffffdbbbbbdddddbcbccccbcccbbdfffffbccbdbdbfffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffffffffffffffffffbbcccbccbbbddddbbbbbbbbbfffffbbbbbbbbdbdddbbcccccdcccbddfffffbccbbdfffffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffffffffffffffffffbbcccbccbbddbbbbbbbbbccbffffdcccbbbbbbbdbddbcccccbcccbfffffffbccbddfffffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffffffffffffffffffbcccccccbbbbbdddbbbbbccbdfffbcfcbbbbbddddddbcccccccccbfffffffbcbbdffffffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffffffffffffffffffbcccccccbbbbbbbdbbbbbccbbffdbbfcbbbbbbddbdbbcccccccccbfffffffdbddfffffffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffffffffffffffffffbcccccccbbbbbbbbbbbbccccbffbccffbbcbbbbbbbbccccccccccbffffffffffffffffffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffffffffffffffffffbcccccccbbbcbbbbbbbccccccffcccfffcbbbbbbbbbccccccccccbffffffffffffffffffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffffffffffffffffffbccccccccccbbbbbbbbccccccdfccccfffbbbbbbbbbccccccccccbffffffffffffffffffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffffffffffffffffffbccccccccccbbbddbbbccccccdfccccffcbbbddbbbbccccccccccdffffffffffffffffffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffffffffffffffffffbcccccccccbbbbbddbbccccccbfcccccccbbdffbbbbbccccccccbfffffffffffffffffffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffffffffffffffffffbcccfccccccccfffdbbccccccbfcccccccbbdfffbcbbccccccccbfffffffffffffffffffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffffffffffffffffffbccccccccccccffffddccccbbffcbcccccbfffffdcbbccccccccbfffffffffffffffffffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffffffffffffffffffbccccccccbcccffffffbcccccffbcccccbfffffffccbccccccccdfffffffffffffffffffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffffffffffffffffffdbcccccccbccbffffffbcccbdffdbcccbbfffffffccbcccccccbffffffffffffffffffffffffffffffffffffffffffffffffffffff
// fffffffffffffffffffffffffffffffffffffffffffffffffffffffdccccccccccffffffffbbbbffffbbbbdffffffffbcccccccccbffffffffffffffffffffffffffffffffffffffffffffffffffffff
// fffffffffffffffffffffffffffffffffffffffffffffffffffffffdbcccccccbbfffffffffbfffffffffffffffffffbbbccccccbbffffffffffffffffffffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbcccccbbfffffffffffffffffffffffffffffffbbccccccbfffffffffffffffffffffffffffffffffffffffffffffffffffffff
// fffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbcccbbbffffffffffffffffffffffffffffffffbbcccbbffffffffffffffffffffffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbffffffffffffffffffffffffffffffffffbbbc6fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
// `)
scene.setBackgroundImage(img`
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffee444444444444444444444444444effffffffffffffffffffffffffffffffffffffffffff2444444444444444444444444444eefffffffffffffffffffffffffff
    ffffffffffffffffffffffffffe4445555555555555555555555555444ffffffffffffffffffffffffffffffffffffffffffff2445555555555555555555555554444efffffffffffffffffffffffff
    ffffffffffffffffffffffffe445555555555555555555555555554444e444444444444444444444444444444444444444444444455555555555555555555555555444effffffffffffffffffffffff
    ffffffffffffffffffffffff455554444444444444444444444444444445555555555555544444444444444444444444554444454444444444444444444444444444444efffffffffffffffffffffff
    fffffffffffffffffffffff4555444444444444444444444444444444e444444444444444444444442244444444444444444444544444444444444444444444444444444effffffffffffffffffffff
    ffffffffffffffffffffffe5554444444444444444444444444444444eee44444444444444444442222444444444444444444e44444444444444444444444444444444444ffffffffffffffffffffff
    ffffffffffffffffffffff45544444444444444444444444444444444eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee4444444444444444444444444444444444efffffffffffffffffffff
    fffffffffffffffffffffe5544444eeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee4444444444444444444444444444444444fffffffffffffffffffff
    ffffffffffffffffffffe45544444eeeeeeeeeeeeeeeeeeeeeeeeeeeee2222222222222222222222222222222222222222222222eeeeeeeeeeeee2eeeeeeeeeee444444444effffffffffffffffffff
    fffffffffffffffffffe24544444eee2eeeeeeeeeeeeeeeeee222eeeeeeeeeeeeeeeee222eeeeeeeeeeeee222eeeeeeeeeeeeee22eeeeeeeeeee222eeeeeeeeeee24444444effffffffffffffffffff
    fffffffffffffffffff224544444ee22cc77777777777777ccce2c7777777777777768e22877777777777c22e677777777777776c8677777777c22e8c77777777c2444444eeffffffffffffffffffff
    ffffffffffffffffffe2e4544444ee22c74444444444444455c8c854444444444445688ee654444444445622cc54444444444455c8654444445ceec8544444457c2244444eeffffffffffffffffffff
    ffffffffffffffffffe2e5544444ee22c745444444444445445c88545444444444556888cc55444444455ce2cc55444444444444568755444447cc8c54444545622244444eeffffffffffffffffffff
    ffffffffffffffffffe2e554444ee222c74455555555555544478854455554444444688887544444444447c2cc54444444444444468654444445688754444447c222444444effffffffffffffffffff
    fffffffffffffffffee2e554444ee222c74555555555555555458854555544444444688885444455544447c2cc544554444444444c887444444478654454445ce2224444444ffffffffffffffffffff
    fffffffffffffffffee2e544444e2222c7455555555555555445885455545555555568886544445754444582cc544544575544444c887544544456754444445c22224444444eeeeffffffffffffffff
    fffffffffffffffffee24544444e2222c745555545775555554588545554588888888888c544445c5444456ecc544544787545544c88654444445c544444447e222224444444444ffffffffffffffff
    ffffffffffffffffffee444444442222c745555447885455554588545554577777778888c5444456544445cecc544544787545444c88875445445c54454445c2222224444444444ffffffffffffffff
    ffffffffffffffffe445544444ee2222c745555447885455544588545554444444458888744444565444447ccc544544787545544c88865444444c54454447c2222224444444444efffffffffffffff
    fffffffffffffffe4455444444e22222c745555547885455544588545555444444258888544444565444445ccc544544787544444c88887544444c54454456e222222444444444eefffffffffffffff
    fffffffffffffffe4544444444ee2222c755555547cc555554458854555554444445888654444456544444568c544544787545544c8888c54444475455447c2222222224444444eefffffffffffffff
    ffffffffffffffee5444444eeeee2222c755555545555555545c8855555455555555888c54444478544444568c545544787545444c888885444444455445ce222222222ee44444eefffffffffffffff
    fffffffffffff22e54444eeeeee22222c75555554444555545c888545554566666668887544444555545444c8c544544787544444c88888c544544555445c22222222222ee44444efffffffffffffff
    ffffffffffff222e54444eeeee222222c74555555555555545688854555457777777688544444444444444478c5445447c7544444c888886544555555447c222222222222e44444ecffffffffffffff
    ffffffffffff222444444eee22222222c74555555555555544c88854455444444445686544444444444444458c544444444444444cc88888754555554458e222222222222244444eeffffffffffffff
    ffffffffffff22e444444ee222222222c74555554775555544788854455544444444686544444555554444456c544444444444444cec888865455555447c2222222222222224444eeffffffffffffff
    ffffffffffff22e44444eee222222222c7455554477555555458885454444444444468c5444ee78887eeeee5cc5444444444444456e2c8888745555545c22222222222222224444eeffffffffffffff
    ffffffffffff22244444eee222222222c745555447c54555545c8854544444444545687444ccccccccccccc47c554444444445557822c8888c54555545c22222222222222224444eeffffffffffffff
    ffffffffffff22244444eee222222222c7445554476544554447885555555555555568755ce444444444444c7c5555555555555c8822e8888c54555445c222222222222222244442effffffffffffff
    ffffffffffff22244444ee2222222222c7445544478544444447888888888888888888888c5547777777744c88888888888888888c222c888c54444445c222222222222222244442eefffffffffffff
    ffffffffffff22244442ee2222222222c75454444787544445478888888888888888888885548c77777c8744888888888888888882222e888c54444545c222222222222222224442eefffffffffffff
    ffffffffffff2244422eee2222222222c7555555578c5555554588888888888888888888c54c444444444c54e888888888888888e2222e888c54555545c222222222222222224222eefffffffffffff
    fffffffffffe2244422eee2222222222c77777777c8877777777888888ccccccccccccc855ec545555544e744cccccccccccccce22222e888677777777c222222222222222224222eefffffffffffff
    fffffffffffe2244444eee2222222222c8888888888888888888888888c22222222222c754c7554555554ec44ec222222222222222222e888888888888c2222222222222222e4444eefffffffffffff
    fffffffffffe2244444eee22222222222ecc8888888888888888888888c2222222222ec55e875444c5554e8c44ce22222222222222222e88888888888c22222222222222222e44442efffffffffffff
    fffffffffffe2e44444ee22222222222222ec888888888888888888888c2222222222ce54c8c777775554e88e4ec22222222222222222e8888888888c222222222222222222e44444eeffffffffffff
    ffffffffffe22244442ee2222222222222222ec888888888888888888cc222222222ec54c88888c445554788c44ce222222222eccccccc8888888888ccce2222222222222222e4444eeffffffffffff
    ffffffffffe2224444eee2222222222222222c88888888888888888888e222222222ce54c88887555545c8888544c222222222c888888888888888888888ce2222222222222224444eeffffffffffff
    ffffffffffe2224444eee22222222222222cc8888888888888888888888e222222222c54e88ce555555c8888c54ce222222222c88888888888888888888888ce22222222222224444e4ffffffffffff
    ffffffffffe2e44444eee222222222222e88888888888888888888888888222222222cc44c87555555777c8855ec2222222222c8888888888888888888888888c22222222222e44444eefffffffffff
    ffffffffffe2e44444eee222222222222ec7777777777777777688888888cccccccccc844e87555544444e8e54ccccccccccccc8888887777777777777777777c22222222222e44444eefffffffffff
    ffffffffffe2244444ee2222222222222ec544444444444444556888888888888888888c54c7555555554ec55c88888888888888888885444444444444444445c22222222222e24444eefffffffffff
    ffffffffffe2244444ee2222222222222ec5554455444444454456888888888888888888e447555555554e754888888888888888888885554445555555444545c22222222222244444eefffffffffff
    ffffffffffe22444444e2222222222222ec545555555555554444c888886666666666888c547ccccccccc754c888886666666666888885445555555555554445c22222222222444444eefffffffffff
    ffffffffffe2e444444e2222222222222ec5555555554555555447888c555555555555688744c8888888855e88886755555555555c8885444555555555554445c2222222222444444eeefffffffffff
    ffffffffffe2444444422222222222222ec555555555555555544788c544444444444456884444444444554cec8854444444444445c8854445555555555444e5c22222222244444eeeeefffffffffff
    fffffffffe22444444442222222222222ec55555545cc55555544788745444444444444788c55555555555ec4c87554444444444547885444455555555544445c22222222244444eeefffffffffffff
    fffffffffe22e44444444222222222222ec555555458855555544788544444444444444486ccccccccccccc44e85444444444444444887777755555554577777c22222222244444eeefffffffffffff
    fffffffffe22ee4444444422222222222ec555555458855555544788544554555554444586544544555544444e854445455554444448888888755555547ccccce22222222244444eeefffffffffffff
    fffffffffe22eefe44444422222222222ec5555554588555555447885445545cc544544586544544787544444e85445544cc54544448888888755555547c2222222222222244444eeffffffffffffff
    fffffffffe22eefe44444e22222222222ec55555545cc55555545c8854445458854544458654454478c544444e854455446654554448888888755555547c22222222222222444444eeeefffffffffff
    fffffffff22eeeee44444ee2222222222ec55555544444555545c888544554588544544586544554575544445c854455446654554448888888755555547c222222222222224444444eeefffffffffff
    fffffffff22eeeee44444ee2222222222ec55555554444555547888854454458854454458654455444444457c8854455446654454448888888755555547e22222222222222244444eeeefffffffffff
    ffffffffffeeeee444444ee2222222222ec5555555555555554788885445545885445445865455544444445c88854455446654444448888888755555547e22222222222222e44444eeee25fffffffff
    fffffffffffeeee444444ee2222222222ec555555555555555458888544554588544544586545554555544457c854455446654454448888888755555547e22222222222222244444eeee245ffffffff
    ffffffffffeeeee444444ee22222222222c55555545854555545888854455458854444458654454478c544444e854455446654454448888888755555447e22222222222222244444eeeee444fffffff
    fffffffffe4eeee444444ee22222222222c55555545854555544788854455458854554458654554478c544444e854455446654454448888888754555447e22222222222222244444eee22444fffffff
    ffffffff5444eee4444442e22222222222c555555458745555447888544444555544444586544544577544444e854455445554444248888888754555447e22222222222222244444eee224444ffffff
    fffffff44444eee4444444222222222222c5455544587545554458885444444444444445865444444444444447854444444444444448888888754555447e22222222222222444444eee224444efffff
    ffffff444444ee45444444422222222222c545554248c54455445c88744444444444444786544444444444444c875444444444444448888888754444447e44444444444444454444eee2444444fffff
    ffffff44444e2245444444442222222222c555444458c54444444c88c54454444445445c865454444444454456c6544544444445457cc88888754444547444445555555555544444eee2444444fffff
    fffff444444e2245444444444444444444c5555554588555555557888755555555555576e655555555555555cc4c75555555555557c447c888755555557444444444444444444444eee2444444fffff
    ffff2444442e22454444444444444444446cccccccc88cccccccc688cc8cccccccccc8c448cccccccccccc68c444c86ccccccccc8c44444ec86ccccccc64e8e4444444444444444eeeff2444444ffff
    ffff444444e22244444444444444444444eeeeeeeeee4eeeeeeeeee4444eeeeeeeeee4444eeeeeeeeeeeeee4444444eeeeeeeeee444444444ebeeeeeeee4444444444444444444eeefff4444444ffff
    ffff444444e222244444444444444444444444444444444444444444444444444444444444444422222222244444444444eeeeeeeeeeeeeeee454444444444444444444444444eeeffff2244444ffff
    ffff4444442e22e44444444444444444444444444444ee444eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee44444444444444444444444444eeeeffff4444444ffff
    ffff444444feeeee44444444444444444444444444eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee444444444444444444444444eeeeffffff2444444ffff
    fff4444222feeeee24444444444444444444444444eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefff444444444444e44eeeeeeeeeeeeffffff4444444ffff
    fff4444444ffeeeeee444444444444444444444e4eeffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee22222222222222eeffeeeeeeeeeeeeeeeeeffffeeeeeeffffff4444444ffff
    fff2444444feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee222222222222222222222222222222222222222222222222222222222222222222eeeeeeeeeeeeeeeeeeeeeeeeee2222fffffff4444442ffff
    ffff444444ffeee22eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee222222222222222eeeeeeeee22222222222222222222effffff4444444fffff
    ffff4444442feee2222eeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffffffeeeeeee22222222222222222222fffffff44444444fffff
    ffff4444444ffee22222222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeee222222222222222222ffffffff224444444fffff
    ffff44444444f2e22222222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff442444444ffffff
    ffff444444444ff2222222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2444444444ffffff
    fffff444444444ffffe2eeeeeeeeeeeeeeee44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444ee4424444422fffffff
    ffffff444442444ffff4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444442fffffff
    ffffff44444444444e444444444444444444444444444444444444444444444444444444444444444eeeeeeeeee77777777777777777777777777777777777777777777777744424444444fffffffff
    fffffff2444444442444477777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777444444222ffffffffff
    ffffffff44444444244477777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777774444444fffffffffff
    fffffffff2442444444477cccccc7cc77cc7cccc7ccc7777cccccc7777cccccc7ccc7ccc7ccc77cccc77cccc88c77788888877c888878888888c888888c887777c888887c8877744444ffffffffffff
    ffffffffff22444444477788cc88c88cc88cc88c7888777788cc887777c88c88cc887c88cc887c8888c7c88cc8c77788c788c7888887cc888cc7c888ccc887777c887777c887777444fffffffffffff
    ffffffffffff444444777788cc88c88cc8877887788877778877887777c88cccc7887c88cc887c8c8887c887c8877788c788c788c88c778887777c8877c887777c887777c8c777744efffffffffffff
    ffffffffffffff44477777888888788c788778877888777788778877777c88cc77887888c888788cc887c88c888777888c887c88c888778887777c8877c887777c8888c7c8c77574effffffffffffff
    fffffffffffffe4447777788cc88c88c7887788778887777887788777777cc88c788c888888878888887c88cccc77788c788cc88c888778887777c8877c887777c8877777cc77544fffffffffffffff
    ffffffffffffff44477777887c88c88cc887c88c7888ccc788cc887777c8c788c7888888888cc88c788cc88777777788cc88cc887c88778887777c8877c88888cc888887c8c7554ffffffffffffffff
    ffffffffffffffc447777788888c7c888887cccc7cccccc7cccccc78c7ccccccc7ccccccccc7ccc77ccc7cc7777877cccccc7ccc77cc77ccc7777ccc777ccccc77ccccc77c77577ffffffffffffffff
    ffffffffffffffff4777777777777777777777777777777777777778777777777777777777777777777777777778777777777777777777777777777777777777777777777777747efffffffffffffff
    ffffffffffffffffe5777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777ffffffffffffffffff
    ffffffffffffffff75477777777777777777777777777777777777777777777777777777777777775555557777744444444444777555557744444444444444444777777444475ffffffffffffffffff
    ffffffffffffffffeec77444477444444444444444444777775554457577444444444444444444757755457777444444444444477555547422222eeeeeeeeeeee474777eeee75ffffffffffffffffff
    fffffffffffffffffff77eeee77eeeeeeeeeeeeeccccce7777e7555577ecffffffffffffffffff77755ffe777effffffffffffffe757ef7ffffffffffffffffffc7e777ffff77ffffffffffffffffff
    fffffffffffffffffff77efff77fffffffffffffffffffc777fffeeeffffffffffffffffffffffe777effe777ffffffffffffffffffffc7ffffffffffffffffffe7ee7effffffffffffffffffffffff
    ffffffffffffffffffffcffffb7ffffffffffffffffffffe77fffffffffffffffffffffffffffff775fffe77fffffffffffffffffffff75efffffffffffffffff77efffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffff775fffffffffffffffffffffffffffffc5efff777fffffffffffffffffffff777fffffffffffffffff777fffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffff7777ffffffffffffffffffffffffffffffffff5775ffffffffffffffffffff77ffffffffffffffffffd77fffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffff7575ffffffffffffffffffffffffffffffffff577fffffffffffffffffffffffffffffffffffffffff57ffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffff5755fffffffffffffffffffffffffffffffffff55fffffffffffffffffffffffffffffffffffffffffd77fffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff777fffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    `)
scene.setBackgroundColor(15)
// let textSprite = textsprite.create("READY2ROBOT!", 0, 5)
// textSprite.setMaxFontHeight(10)
// textSprite.left = 10
// textSprite.y = 10
// textSprite.setOutline(2, 4)
pause(5000)
game.splash("READY2ROBOT!", "Sinkhole's Adventures")
setLevel()
setGravity()
setPlayer()
initializeAnimations()
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
            animation.setAction(player, ActionKind.JumpingLeft)
        } else {
            animation.setAction(player, ActionKind.JumpingRight)
        }
        if (currentLevel != 2) {
            player.startEffect(effects.warmRadial, 50)
        } else {
            player.startEffect(effects.coolRadial, 50)
        }
    } else if (player.vx < 0 && !(player.isHittingTile(CollisionDirection.Top))) {
        animation.setAction(player, ActionKind.RunningLeft)
    } else if (player.vx > 0 && !(player.isHittingTile(CollisionDirection.Top))) {
        animation.setAction(player, ActionKind.RunningRight)
    } else if (player.vy == 0 && player.isHittingTile(CollisionDirection.Bottom)) {
        animation.setAction(player, ActionKind.Idle)
    }
})
forever(function () {
    if (currentLevel != 2) {
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
