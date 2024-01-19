sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprites.destroy(sprite)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    sprites.destroy(otherSprite)
})
let ENEMIGO: Sprite = null
let PATO = sprites.create(img`
    . . . . . . . . . . b 5 b . . . 
    . . . . . . . . . b 5 b . . . . 
    . . . . . . . . . b c . . . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 5 5 5 5 5 b . . . 
    . . . . b b 5 d 1 f 5 5 d f . . 
    . . . . b 5 5 1 f f 5 d 4 c . . 
    . . . . b 5 5 d f b d d 4 4 . . 
    b d d d b b d 5 5 5 4 4 4 4 4 b 
    b b d 5 5 5 b 5 5 4 4 4 4 4 b . 
    b d c 5 5 5 5 d 5 5 5 5 5 b . . 
    c d d c d 5 5 b 5 5 5 5 5 5 b . 
    c b d d c c b 5 5 5 5 5 5 5 b . 
    . c d d d d d d 5 5 5 5 5 d b . 
    . . c b d d d d d 5 5 5 b b . . 
    . . . c c c c c c c c b b . . . 
    `, SpriteKind.Player)
scene.setBackgroundColor(9)
effects.bubbles.startScreenEffect()
game.splash("SUPER PATO", "Sergio Mas López")
controller.moveSprite(PATO)
info.setLife(3)
info.setScore(0)
animation.runImageAnimation(
PATO,
[img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . b 5 5 b . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 5 5 5 5 5 b . . . 
    . b b b b b 5 5 5 5 5 5 5 b . . 
    . b d 5 b 5 5 5 5 5 5 5 5 b . . 
    . . b 5 5 b 5 d 1 f 5 d 4 f . . 
    . . b d 5 5 b 1 f f 5 4 4 c . . 
    b b d b 5 5 5 d f b 4 4 4 4 b . 
    b d d c d 5 5 b 5 4 4 4 4 4 4 b 
    c d d d c c b 5 5 5 5 5 5 5 b . 
    c b d d d d d 5 5 5 5 5 5 5 b . 
    . c d d d d d d 5 5 5 5 5 d b . 
    . . c b d d d d d 5 5 5 b b . . 
    . . . c c c c c c c c b b . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . b 5 b . . . 
    . . . . . . . . . b 5 b . . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 5 5 5 5 5 b . . . 
    . b b b b b 5 5 5 5 5 5 5 b . . 
    . b d 5 b 5 5 5 5 5 5 5 5 b . . 
    . . b 5 5 b 5 d 1 f 5 d 4 f . . 
    . . b d 5 5 b 1 f f 5 4 4 c . . 
    b b d b 5 5 5 d f b 4 4 4 4 4 b 
    b d d c d 5 5 b 5 4 4 4 4 4 b . 
    c d d d c c b 5 5 5 5 5 5 5 b . 
    c b d d d d d 5 5 5 5 5 5 5 b . 
    . c d d d d d d 5 5 5 5 5 d b . 
    . . c b d d d d d 5 5 5 b b . . 
    . . . c c c c c c c c b b . . . 
    `,img`
    . . . . . . . . . . b 5 b . . . 
    . . . . . . . . . b 5 b . . . . 
    . . . . . . . . . b c . . . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 5 5 5 5 5 b . . . 
    . . . . b b 5 d 1 f 5 5 d f . . 
    . . . . b 5 5 1 f f 5 d 4 c . . 
    . . . . b 5 5 d f b d d 4 4 . . 
    b d d d b b d 5 5 5 4 4 4 4 4 b 
    b b d 5 5 5 b 5 5 4 4 4 4 4 b . 
    b d c 5 5 5 5 d 5 5 5 5 5 b . . 
    c d d c d 5 5 b 5 5 5 5 5 5 b . 
    c b d d c c b 5 5 5 5 5 5 5 b . 
    . c d d d d d d 5 5 5 5 5 d b . 
    . . c b d d d d d 5 5 5 b b . . 
    . . . c c c c c c c c b b . . . 
    `,img`
    . . . . . . . . . . b 5 b . . . 
    . . . . . . . . . b 5 b . . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 5 5 5 5 5 b . . . 
    . . . . b b 5 d 1 f 5 d 4 c . . 
    . . . . b 5 5 1 f f d d 4 4 4 b 
    . . . . b 5 5 d f b 4 4 4 4 b . 
    . . . b d 5 5 5 5 4 4 4 4 b . . 
    . . b d d 5 5 5 5 5 5 5 5 b . . 
    . b d d d d 5 5 5 5 5 5 5 5 b . 
    b d d d b b b 5 5 5 5 5 5 5 b . 
    c d d b 5 5 d c 5 5 5 5 5 5 b . 
    c b b d 5 d c d 5 5 5 5 5 5 b . 
    . b 5 5 b c d d 5 5 5 5 5 d b . 
    b b c c c d d d d 5 5 5 b b . . 
    . . . c c c c c c c c b b . . . 
    `,img`
    . . . . . . . . . . b 5 b . . . 
    . . . . . . . . . b 5 b . . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 5 5 5 5 5 b . . . 
    . . . . b b 5 d 1 f 5 d 4 c . . 
    . . . . b 5 5 1 f f d d 4 4 4 b 
    . . . . b 5 5 d f b 4 4 4 4 b . 
    . . . b d 5 5 5 5 4 4 4 4 b . . 
    . b b d d d 5 5 5 5 5 5 5 b . . 
    b d d d b b b 5 5 5 5 5 5 5 b . 
    c d d b 5 5 d c 5 5 5 5 5 5 b . 
    c b b d 5 d c d 5 5 5 5 5 5 b . 
    c b 5 5 b c d d 5 5 5 5 5 5 b . 
    b b c c c d d d 5 5 5 5 5 d b . 
    . . . . c c d d d 5 5 5 b b . . 
    . . . . . . c c c c c b b . . . 
    `,img`
    . . . . . . . . . . b 5 b . . . 
    . . . . . . . . . b 5 b . . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 5 5 5 5 5 b . . . 
    . . . . b b 5 d 1 f 5 5 d f . . 
    . . . . b 5 5 1 f f 5 d 4 c . . 
    . . . . b 5 5 d f b d d 4 4 . . 
    . b b b d 5 5 5 5 5 4 4 4 4 4 b 
    b d d d b b d 5 5 4 4 4 4 4 b . 
    b b d 5 5 5 b 5 5 5 5 5 5 b . . 
    c d c 5 5 5 5 d 5 5 5 5 5 5 b . 
    c b d c d 5 5 b 5 5 5 5 5 5 b . 
    . c d d c c b d 5 5 5 5 5 d b . 
    . . c b d d d d d 5 5 5 b b . . 
    . . . c c c c c c c c b b . . . 
    . . . . . . . . . . . . . . . . 
    `],
90,
true
)
PATO.sayText("Hola, ayudame a esquivar a los patos", 3500, true)
pause(5000)
info.startCountdown(10)
PATO.setStayInScreen(true)
let PARED = sprites.create(img`
    9 . . . . . . . . . . . . . . . 
    9 . . . . . . . . . . . . . . . 
    9 . . . . . . . . . . . . . . . 
    9 . . . . . . . . . . . . . . . 
    9 . . . . . . . . . . . . . . . 
    9 . . . . . . . . . . . . . . . 
    9 . . . . . . . . . . . . . . . 
    9 . . . . . . . . . . . . . . . 
    9 . . . . . . . . . . . . . . . 
    9 . . . . . . . . . . . . . . . 
    9 . . . . . . . . . . . . . . . 
    9 . . . . . . . . . . . . . . . 
    9 . . . . . . . . . . . . . . . 
    9 . . . . . . . . . . . . . . . 
    9 . . . . . . . . . . . . . . . 
    9 . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)
let PARED_2 = sprites.create(img`
    9 . . . . . . . . . . . . . . . 
    9 . . . . . . . . . . . . . . . 
    9 . . . . . . . . . . . . . . . 
    9 . . . . . . . . . . . . . . . 
    9 . . . . . . . . . . . . . . . 
    9 . . . . . . . . . . . . . . . 
    9 . . . . . . . . . . . . . . . 
    9 . . . . . . . . . . . . . . . 
    9 . . . . . . . . . . . . . . . 
    9 . . . . . . . . . . . . . . . 
    9 . . . . . . . . . . . . . . . 
    9 . . . . . . . . . . . . . . . 
    9 . . . . . . . . . . . . . . . 
    9 . . . . . . . . . . . . . . . 
    9 . . . . . . . . . . . . . . . 
    9 . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)
let PARED_3 = sprites.create(img`
    9 . . . . . . . . . . . . . . . 
    9 . . . . . . . . . . . . . . . 
    9 . . . . . . . . . . . . . . . 
    9 . . . . . . . . . . . . . . . 
    9 . . . . . . . . . . . . . . . 
    9 . . . . . . . . . . . . . . . 
    9 . . . . . . . . . . . . . . . 
    9 . . . . . . . . . . . . . . . 
    9 . . . . . . . . . . . . . . . 
    9 . . . . . . . . . . . . . . . 
    9 . . . . . . . . . . . . . . . 
    9 . . . . . . . . . . . . . . . 
    9 . . . . . . . . . . . . . . . 
    9 . . . . . . . . . . . . . . . 
    9 . . . . . . . . . . . . . . . 
    9 . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)
let PARED_4 = sprites.create(img`
    9 . . . . . . . . . . . . . . . 
    9 . . . . . . . . . . . . . . . 
    9 . . . . . . . . . . . . . . . 
    9 . . . . . . . . . . . . . . . 
    9 . . . . . . . . . . . . . . . 
    9 . . . . . . . . . . . . . . . 
    9 . . . . . . . . . . . . . . . 
    9 . . . . . . . . . . . . . . . 
    9 . . . . . . . . . . . . . . . 
    9 . . . . . . . . . . . . . . . 
    9 . . . . . . . . . . . . . . . 
    9 . . . . . . . . . . . . . . . 
    9 . . . . . . . . . . . . . . . 
    9 . . . . . . . . . . . . . . . 
    9 . . . . . . . . . . . . . . . 
    9 . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)
let PARED_5 = sprites.create(img`
    9 . . . . . . . . . . . . . . . 
    9 . . . . . . . . . . . . . . . 
    9 . . . . . . . . . . . . . . . 
    9 . . . . . . . . . . . . . . . 
    9 . . . . . . . . . . . . . . . 
    9 . . . . . . . . . . . . . . . 
    9 . . . . . . . . . . . . . . . 
    9 . . . . . . . . . . . . . . . 
    9 . . . . . . . . . . . . . . . 
    9 . . . . . . . . . . . . . . . 
    9 . . . . . . . . . . . . . . . 
    9 . . . . . . . . . . . . . . . 
    9 . . . . . . . . . . . . . . . 
    9 . . . . . . . . . . . . . . . 
    9 . . . . . . . . . . . . . . . 
    9 . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)
let PARED_6 = sprites.create(img`
    9 . . . . . . . . . . . . . . . 
    9 . . . . . . . . . . . . . . . 
    9 . . . . . . . . . . . . . . . 
    9 . . . . . . . . . . . . . . . 
    9 . . . . . . . . . . . . . . . 
    9 . . . . . . . . . . . . . . . 
    9 . . . . . . . . . . . . . . . 
    9 . . . . . . . . . . . . . . . 
    9 . . . . . . . . . . . . . . . 
    9 . . . . . . . . . . . . . . . 
    9 . . . . . . . . . . . . . . . 
    9 . . . . . . . . . . . . . . . 
    9 . . . . . . . . . . . . . . . 
    9 . . . . . . . . . . . . . . . 
    9 . . . . . . . . . . . . . . . 
    9 . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)
let PARED_7 = sprites.create(img`
    9 . . . . . . . . . . . . . . . 
    9 . . . . . . . . . . . . . . . 
    9 . . . . . . . . . . . . . . . 
    9 . . . . . . . . . . . . . . . 
    9 . . . . . . . . . . . . . . . 
    9 . . . . . . . . . . . . . . . 
    9 . . . . . . . . . . . . . . . 
    9 . . . . . . . . . . . . . . . 
    9 . . . . . . . . . . . . . . . 
    9 . . . . . . . . . . . . . . . 
    9 . . . . . . . . . . . . . . . 
    9 . . . . . . . . . . . . . . . 
    9 . . . . . . . . . . . . . . . 
    9 . . . . . . . . . . . . . . . 
    9 . . . . . . . . . . . . . . . 
    9 . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)
let PARED_8 = sprites.create(img`
    9 . . . . . . . . . . . . . . . 
    9 . . . . . . . . . . . . . . . 
    9 . . . . . . . . . . . . . . . 
    9 . . . . . . . . . . . . . . . 
    9 . . . . . . . . . . . . . . . 
    9 . . . . . . . . . . . . . . . 
    9 . . . . . . . . . . . . . . . 
    9 . . . . . . . . . . . . . . . 
    9 . . . . . . . . . . . . . . . 
    9 . . . . . . . . . . . . . . . 
    9 . . . . . . . . . . . . . . . 
    9 . . . . . . . . . . . . . . . 
    9 . . . . . . . . . . . . . . . 
    9 . . . . . . . . . . . . . . . 
    9 . . . . . . . . . . . . . . . 
    9 . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)
let PARED_9 = sprites.create(img`
    9 . . . . . . . . . . . . . . . 
    9 . . . . . . . . . . . . . . . 
    9 . . . . . . . . . . . . . . . 
    9 . . . . . . . . . . . . . . . 
    9 . . . . . . . . . . . . . . . 
    9 . . . . . . . . . . . . . . . 
    9 . . . . . . . . . . . . . . . 
    9 . . . . . . . . . . . . . . . 
    9 . . . . . . . . . . . . . . . 
    9 . . . . . . . . . . . . . . . 
    9 . . . . . . . . . . . . . . . 
    9 . . . . . . . . . . . . . . . 
    9 . . . . . . . . . . . . . . . 
    9 . . . . . . . . . . . . . . . 
    9 . . . . . . . . . . . . . . . 
    9 . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)
let PARED_10 = sprites.create(img`
    9 . . . . . . . . . . . . . . . 
    9 . . . . . . . . . . . . . . . 
    9 . . . . . . . . . . . . . . . 
    9 . . . . . . . . . . . . . . . 
    9 . . . . . . . . . . . . . . . 
    9 . . . . . . . . . . . . . . . 
    9 . . . . . . . . . . . . . . . 
    9 . . . . . . . . . . . . . . . 
    9 . . . . . . . . . . . . . . . 
    9 . . . . . . . . . . . . . . . 
    9 . . . . . . . . . . . . . . . 
    9 . . . . . . . . . . . . . . . 
    9 . . . . . . . . . . . . . . . 
    9 . . . . . . . . . . . . . . . 
    9 . . . . . . . . . . . . . . . 
    9 . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)
let PARED_11 = sprites.create(img`
    9 . . . . . . . . . . . . . . . 
    9 . . . . . . . . . . . . . . . 
    9 . . . . . . . . . . . . . . . 
    9 . . . . . . . . . . . . . . . 
    9 . . . . . . . . . . . . . . . 
    9 . . . . . . . . . . . . . . . 
    9 . . . . . . . . . . . . . . . 
    9 . . . . . . . . . . . . . . . 
    9 . . . . . . . . . . . . . . . 
    9 . . . . . . . . . . . . . . . 
    9 . . . . . . . . . . . . . . . 
    9 . . . . . . . . . . . . . . . 
    9 . . . . . . . . . . . . . . . 
    9 . . . . . . . . . . . . . . . 
    9 . . . . . . . . . . . . . . . 
    9 . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)
PARED.setPosition(-1, 6)
PARED_2.setPosition(-2, 20)
PARED_3.setPosition(-2, 31)
PARED_4.setPosition(-4, 40)
PARED_5.setPosition(2, 53)
PARED_6.setPosition(2, 53)
PARED_7.setPosition(-2, 67)
PARED_8.setPosition(-2, 67)
PARED_9.setPosition(0, 85)
PARED_10.setPosition(-1, 99)
PARED_11.setPosition(-2, 111)
game.onUpdateInterval(850, function () {
    ENEMIGO = sprites.create(img`
        . . . . . . . . c c c c . . . . 
        . . . . . . c c d d d d c . . . 
        . . . . . c c c c c c d c . . . 
        . . . . c c 4 4 4 4 d c c . c c 
        . . . c 4 d 4 4 4 4 4 1 c c 4 c 
        . . c 4 4 4 1 4 4 4 4 d 1 c 4 f 
        . c 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
        f 4 4 4 4 4 1 1 c f 4 4 1 f 4 f 
        f 4 4 4 f 4 1 c 4 f 4 4 1 f 4 f 
        f 4 4 4 4 4 1 4 4 f 4 4 d f f f 
        . f 4 4 4 4 1 c c 4 4 d f f . . 
        . . f f 4 d 4 4 4 4 4 c f . . . 
        . . . . f f 4 4 4 4 c d b c . . 
        . . . . . . f f f f d d d c . . 
        . . . . . . . . . . c c c . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Projectile)
    ENEMIGO.setVelocity(-80, 0)
    ENEMIGO.x = randint(160, 160)
    ENEMIGO.y = randint(0, 120)
})
